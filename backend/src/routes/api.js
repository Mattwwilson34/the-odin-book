import express from 'express';
import postSignupController from '../controllers/signup-controllers.js';
import * as posts from '../controllers/post-controllers.js';
import * as comments from '../controllers/comment-controllers.js';
import * as friends from '../controllers/friend-controllers.js';
import getProfile from '../controllers/profile-controllers.js';

const router = express.Router();


router.post('/signup', postSignupController);

// POSTS
router.get('/posts', posts.getPostsController);

router.post('/posts', posts.postPostsController);

router.post('/postLike', posts.postPostLikeController);

// COMMENTS
router.post('/comment', comments.postCommentController);

router.post('/commentLike', comments.postCommentController);

// FRIENDS
router.get('/friends/:userID', friends.getFriendsController);

router.put('/friends/update-friendship', friends.updateFriendsController);

// PROFILES
router.get('/profile/:userID', getProfile);

export default router;
