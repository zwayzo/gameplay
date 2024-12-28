from django.db import models
from userManagement.models import Profile
from django.contrib.auth.models import User

# Create your models here.

class FriendList(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user')
    friends = models.ManyToManyField(User, blank=True, related_name='friends')

    def __str__(self):
        return "friend List of {} ".format(self.user.username)
    
    def add_friend(self, friend):
        if not friend in self.friends.all():
            self.friends.add(friend)
            self.save

    def remove_friend(self, friend):
        if friend in self.friends.all():
            self.friends.remove(friend)

    def unfriend(self, removee):
        # remove the from the remover friendlist (the User who initiate of unfriending action)
        remover_friend_list = self
        remover_friend_list.remove_friend(removee)
        # remove from the other User
        friends_list = FriendList.objects.get(user = removee)
        friends_list.remove_friend(self.user)

    def is_mutual_friend(self, friend):
        return friend in self.friends.all()
        

        
class FriendRequest(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='receiver')
    is_active = models.BooleanField(blank=True, null=False, default=True)
    timestamp = models.TimeField(auto_now=True)

    def __str__(self):
        return "{} sent a friend request to {}".format(self.sender.username, self.receiver.username)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['sender', 'receiver'],
                name='unique_friend_request'
            ),
            models.UniqueConstraint(
                fields=['receiver', 'sender'],
                name='unique_reverse_friend_request'
            )
        ]
    
    def accept(self):
        """
            Accept the request and updating the sender and receiver friendss lists
        """
        receiver_friend_list = FriendList.objects.get(user=self.receiver)
        if receiver_friend_list:
            receiver_friend_list.add_friend(self.sender)
            sender_friend_list = FriendList.objects.get(user=self.sender)
            if sender_friend_list:
                sender_friend_list.add_friend(self.receiver)
                self.is_active = False
                self.save()

    def decline(self):
        """
            Decline a friend request : 
        """
        self.is_active = False
        self.save()

    def cancel(self):
        self.is_active = False
        self.save()
            
"""
    The logic behind what the user will see :
        - is_self
            -> True : you are looking at your own profille (1)
            -> False : you are looking to someone's profile
        - is_friend :
            -> True : this is your friend's profile
            -> False : this is not your friend 
                -> NO_REQUEST_SENT
                -> THEM_SENT_TO_YOU
                -> YOU_SENT_THEM
"""