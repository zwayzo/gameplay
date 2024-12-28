import json
from channels.generic.websocket import AsyncWebsocketConsumer
from collections import defaultdict
import random


# {"type":"paddle","player":"player2","position":{"x":0,"y":0,"z":16}}
# {"type":"paddle","player":"player1","position":{"x":0,"y":0,"z":16}}
# "type":"ball","position":{"x":-0.45424000027182776,"y":0,"z":13.302945000104598}}


players = []
first = False

class GameConsumer(AsyncWebsocketConsumer):
    pls = 0
    async def connect(self):
        """Handle new player connections."""
        print("New connection")

        self.room_group_name = 'game_room' 
        self.player = self.channel_name  
        players.append(self.player)
        await self.accept()
        GameConsumer.pls += 1
        print(GameConsumer.pls)
        await self.channel_layer.group_add(self.room_group_name, self.player)
        if (GameConsumer.pls < 2) :
            await self.send(json.dumps({
                'type' : 'waiting',
                'message' : 'waiting for another plater tp join......'
            }))
        if (GameConsumer.pls == 2):
            start_game_message = {
                'type': 'start_game',
                'player1': {
                    'x': -16,
                    'y': 0,
                    'z': 16,
                },
                'player2': {
                    'x': 0,
                    'y': 0,
                    'z': 16,
                },
                'ball': {
                    'x': -0.45424000027182776,
                    'y': 0,
                    'z': 1.302945000104598,
                }, 
            }
            # Send start game message to both players
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'start_game',
                    'message': start_game_message,
                }
            )
        # print() 
        
        # Send to all connected players
        # await self.channel_layer.group_send(
        #     self.room_group_name,
        #     {
        #         'type': 'player',  
        #         'state': self.player  
        #     }
        # ) 
    

        print(f"Player {self.player} has joined the group: {self.room_group_name}")

        self.state = {
            'player1': {'position': {'x': -16, 'y': 0, 'z':16}},  
            'player2': {'position': {'x': 16, 'y': 0, 'z':16}}, 
            'ball': {'position': {'x': -0.45424000027182776, 'y': 0, 'z': 13.302945000104598}}     
        }

    async def disconnect(self, close_code):
        """Handle player disconnection."""
        print(f"Player {self.player} disconnected.")

        players.remove(self.player)
        GameConsumer.pls -= 1

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'player', 
                'state': f"disconnected"
            }
        )

        # Remove the player from the group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def start_game(self, event):
        """Handle game start message."""
        await self.send(text_data=json.dumps({
            'type': 'start_game',
            'message': event['message'],
        }))

    async def receive(self, text_data):
        global first
        # if first == False and len(players) == 2:
        #     #end first data
        #     data = {
        #         'type': 'start game',
        #         'player1': {
        #             'x': -16,
        #             'y': 0,
        #             'z': 16,
        #         },
        #         'player2': {
        #             'x': 16,
        #             'y': 0,
        #             'z': 16,
        #         },
        #         'ball': {
        #             'x': -0.45424000027182776,
        #             'y': 0,
        #             'z': 13.302945000104598,
        #         },
        #     }

        # # Send the ball data to all connected WebSocket clients
        #     await self.channel_layer.group_send(
        #     self.room_group_name,
        #     {
        #         'type': 'game_state',  # Event type to be handled by game_state
        #         'state': data  # Sending ball data
        #     }
        # )
        #     first = True
        #     print("->  data:", data)




        while len(players) >= 2:
            data = json.loads(text_data)
            # print("here")
            action = data.get('type', '')
            player = data.get('player', '')

            # if action == "ball":
            #     position = data.get('position')
            #     if position and 'x' in position:
            #         x = position['x']
            #         y = position['y']
            #         z = position['z']
            #     else:
            #         print("Key 'position' or 'x' is missing in the data.")

            #     self.update_ball_position(x, y, z)
            #     await self.pack_data_to_send_ball(x, y, z, action)

            if action == "paddle":
                x = float(data.get('position', {}).get('x', 0))  # Get paddle movement
                if int(x) == 0:
                    x = 0

                if player == "player1":
                    self.update_paddle_position('player1', x)
                elif player == "player2":
                    self.update_paddle_position('player2', x)

                await self.pack_data_to_send(player, x, action)




    def update_paddle_position(self, player, x):
        self.state['player']['position'] = {'x':x}

    def update_ball_position(self, x, y, z):
        """Update ball position (You can add more logic here if needed)."""
        self.state['ball']['position'] = {'x': x, 'y': y, 'z': z}
        print(f"Ball position updated: {x}, {y}, {z}")

    async def pack_data_to_send_ball(self, ball_x, ball_y, ball_z, action):
        """Package the ball position data and send to the group."""
        data = {
            'type': action,
            'x': -ball_x,
            'y': ball_y,
            'z': -ball_z,
        }

        # Send the ball data to all connected WebSocket clients
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'game_state',  # Event type to be handled by game_state
                'state': data  # Sending ball data
            }
        )

    async def pack_data_to_send(self, player, x, action):
        """Package the paddle movement data and send to the group."""
        rounded_x = round(x, 2)
        data = {
            'type': action,
            'player': player,
            'position': {
                'x': rounded_x,  # Send the paddle's X position
                'y': 0,
                'z': 16
            }
        }

        # Send the paddle data to all connected WebSocket clients
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'game_state',  # Event type to be handled by game_state
                'state': data  # Sending paddle position data
            }
        )

    async def game_state(self, event):
        """Handle the 'game_state' event and send it to the WebSocket."""
        await self.send(text_data=json.dumps(event))

    def update_paddle_position(self, player, x_change):
        """Update the paddle position based on player input."""
        paddle = self.state[player]  # Accessing state dictionary
        paddle['position']['x'] += x_change

        # Ensure the paddle stays within bounds (example: -10 to +10 on the y-axis)
        paddle['position']['x'] = max(-10, min(paddle['position']['x'], 10))

    def update_ball_position(self, x, y, z):
        """Update ball position based on the received data."""
        ball = self.state['ball']
        ball['position']['x'] = x
        ball['position']['y'] = y
        ball['position']['z'] = z

    def reverse_ball_velocity(self):
        """Reverse the ball's velocity."""
        ball = self.game_state['ball']
        ball['velocity']['x'] = -ball['velocity']['x']
        ball['velocity']['y'] = -ball['velocity']['y']
        ball['velocity']['z'] = -ball['velocity']['z']
        print("Ball velocity reversed:", ball['velocity'])




