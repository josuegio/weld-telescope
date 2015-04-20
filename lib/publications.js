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
  'profile.name': true,
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
  'profile.location': true, // #WELD customized to show location
  'profile.skill1': true, // #WELD customized to show skills
  'profile.skill2': true, // #WELD customized to show skills
  'profile.skill3': true, // #WELD customized to show skills
  'profile.instagram': true, // #WELD customized to show instagram
  'profile.email': true, // #WELD customized to show email
  'profile.phone': true, // #WELD customized to show phone
  'profile.birthday': true, // #WELD customized to show phone
  'profile.instagramUserID': true,
  'profile.instagramAccessToken': true,
};
 
// minimum required properties to display avatars
avatarOptions = {
  _id: true,
  email_hash: true,
  slug: true,
  username: true
}
