from .models import FriendRequest, FriendList


def isNum(data):
    try:
        int(data)
        return True
    except ValueError:
        return False


def get_friend_request_or_false(sender, receiver):
    try :
        return FriendRequest.objects.get(sender=sender, receiver=receiver, is_active=True)
    except FriendRequest.DoesNotExist:
        return False
    
def get_friend_list_or_None(user):
    try :
        return FriendList.objects.get(user=user)
    except :
        return None
    
