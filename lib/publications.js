privacyOptions = { // true means exposed
  _id: true,
  commentCount: true,
  createdAt: true,
  email_hash: true,
  isInvited: true,
  karma: true,
  postCount: true,
  slug: true,
  username: true,
  'profile.username': true,
  'profile.notifications': true,
  'profile.bio': true,
  'profile.github': true,
  'profile.site': true,
  'profile.twitter': true,
  'services.twitter.profile_image_url': true,
  'services.twitter.profile_image_url_https': true,
  'services.facebook.id': true,
  'services.twitter.screenName': true,
  'services.github.screenName': true, // Github is not really used, but there are some mentions to it in the code
  'votes.downvotedComments': true,
  'votes.downvotedPosts': true,
  'votes.upvotedComments': true,
  'votes.upvotedPosts': true,
  'profile.location': true, // #WELD custom profile data
  'profile.membership': true, // #WELD
  'profile.skill1': true, // #WELD
  'profile.skill2': true, // #WELD
  'profile.skill3': true, // #WELD
  'profile.instagram': true, // #WELD
  'profile.email': true, // #WELD
  'profile.phone': true, // #WELD
  'profile.birthday': true, // #WELD
  'profile.instagramUserID': true, // #WELD
  'profile.instagramAccessToken': true, // #WELD
};

// options for your own user account (for security reasons, block certain properties)
ownUserOptions = {
  'services.password.bcrypt': false
}

// minimum required properties to display avatars
avatarOptions = {
  _id: true,
  email_hash: true,
  slug: true,
  username: true
}
