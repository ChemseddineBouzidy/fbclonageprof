import React from 'react'

 function Content() {
  return (

  <div className="posts">
    {/* stories */}
    <div className="stories">
      <div className="owl-controls">
        <div className="owl-nav">
          <div className="controllers nxtBtn">
            <img src="img/icons/arrow-right.svg" alt />
          </div>
        </div>
      </div>
      <div className="owl-carousel owl-theme slider">
        <div className="item">
          <div className="overlay first">
            <div className="create">
              <div className="icon">
                <img src="img/icons/plus.svg" alt />
              </div>
              <span>Create a Story</span>
            </div>
          </div>
          <div className="story-image">
            <img src="img/avatar/hero.png" alt />
          </div>
        </div>
        {/**/}
        <div className="item">
          <div className="overlay">
            <div className="person">
              <div className="profile">
                <img src="img/avatar/2.jpg" alt />
              </div>
            </div>
            <h4> samantha john</h4>
          </div>
          <div className="story-image">
            <img src="img/stories/st-2.jpeg" alt />
          </div>
        </div>
        {/**/}
        <div className="item">
          <div className="overlay">
            <div className="person">
              <div className="profile">
                <img src="img/avatar/3.jpg" alt />
              </div>
            </div>
            <h4>Omar yassir</h4>
          </div>
          <div className="story-image">
            <img src="img/stories/st-3.jpeg" alt />
          </div>
        </div>
        {/**/}
        <div className="item">
          <div className="overlay">
            <div className="person">
              <div className="profile">
                <img src="img/avatar/4.jpg" alt />
              </div>
            </div>
            <h4>amanda cerny</h4>
          </div>
          <div className="story-image">
            <img src="img/stories/st-4.jpg" alt />
          </div>
        </div>
        {/**/}
        <div className="item">
          <div className="overlay">
            <div className="person">
              <div className="profile">
                <img src="img/avatar/5.jpg" alt />
              </div>
            </div>
            <h4>stacy lopez </h4>
          </div>
          <div className="story-image">
            <img src="img/stories/st-1.jpeg" alt />
          </div>
        </div>
        {/**/}
        <div className="item">
          <div className="overlay">
            <div className="person">
              <div className="profile">
                <img src="img/avatar/6.jpg" alt />
              </div>
            </div>
            <h4>joshua simon</h4>
          </div>
          <div className="story-image">
            <img src="img/stories/st-1.jpeg" alt />
          </div>
        </div>
        {/**/}
      </div>
    </div>
    {/*create post*/}
    <div className="timeline">
      <div className="view create-post">
        <div className="input">
          <div className="user">
            <div className="profile">
              <img src="img/avatar/hero.png" alt />
            </div>
          </div>
          <input type="text" placeholder="What on your mind, Anne?" name id />
        </div>
        <div className="media">
          <div className="category">
            <div className="option">
              <div className="icon">
                <img src="img/icons/video-live.svg" alt />
              </div>
              <span>Live video</span>
            </div>
            <div className="option">
              <div className="icon">
                <img src="img/icons/photos.svg" alt />
              </div>
              <span>photo/video</span>
            </div>
            <div className="option">
              <div className="icon">
                <img src="img/icons/smile.svg" alt />
              </div>
              <span>feeling/activity</span>
            </div>
          </div>
        </div>
      </div>
      <div className="create-post view smaller-margin">
        <div className="upper">
          <div className="title">
            <div className="icon">
              <img src="img/icons/video-room.svg" alt />
            </div>
            <span>Rooms</span>
          </div>
          <a href>
            create
          </a>
        </div>
        <div className="owl-carousel owl-theme rooms">
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/hero.png" alt />
              </div>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/1.jpg" alt />
              </div>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/3.jpg" alt />
              </div>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/4.jpg" alt />
              </div>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/2.jpg" alt />
              </div>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/4.jpg" alt />
              </div>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/5.jpg" alt />
              </div>
            </div>
          </div>
          {/**/}
        </div>
      </div>
      {/*post container*/}
      <div className="view view-post-container smaller-margin">
        <div className="view-post">
          <div className="upper">
            <div className="d-flex">
              <div className="user">
                <div className="profile">
                  <img src="img/avatar/5.jpg" alt />
                </div>
              </div>
              <div className="info">
                <h6 className="name">
                  diana barry
                </h6>
                <span className="time">1 hour ago</span>
              </div>
            </div>
            <div className="dots">
              <div className="dot" />
            </div>
          </div>
          <div className="desc">
            <p>Travellimg to the future 🌟 , it's alraedy 2020 🙋‍♂🌈🌴</p>
          </div>
          <div className="post-img">
            <img src="img/posts/1.jpg" alt />
          </div>
          <div className="actions-container">
            <div className="action">
              <div className="icon">
                <img src="img/icons/thumbs-up.svg" alt />
              </div>
              <span>
                like
              </span>
            </div>
            <div className="action">
              <div className="icon">
                <img src="img/icons/comment.svg" alt />
              </div>
              <span>
                comment
              </span>
            </div>
            <div className="action">
              <div className="icon">
                <img src="img/icons/share.svg" alt />
              </div>
              <span>
                share
              </span>
            </div>
          </div>
          <div className="write-comment">
            <div className="user">
              <div className="profile">
                <img src="img/avatar/hero.png" alt />
              </div>
            </div>
            <div className="input">
              <input type="text" placeholder="Write a comment" name id />
              <div className="media">
                <div className="icon">
                  <img src="img/icons/camera.svg" alt />
                </div>
                <div className="icon">
                  <img src="img/icons/image.svg" alt />
                </div>
                <div className="icon">
                  <img src="img/icons/smile-2.svg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*people you may know*/}
      <div className="view friends smaller-margin">
        <div className="upper">
          <h6>people you may know</h6>
          <div className="dots">
            <div className="dot" />
          </div>
        </div>
        <div className="owl-carousel owl-theme people">
          <div className="item">
            <div className="person-img">
              <div className="icon">
                ×
              </div>
              <img src="img/avatar/1.jpg" alt />
            </div>
            <div className="info">
              <h4>
                rosie pie
              </h4>
              <span>4 mutual friend</span>
              <button>
                add friend
              </button>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="person-img">
              <div className="icon">
                ×
              </div>
              <img src="img/avatar/4.jpg" alt />
            </div>
            <div className="info">
              <h4>
                sarah jones
              </h4>
              <span>4 mutual friend</span>
              <button>
                add friend
              </button>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="person-img">
              <div className="icon">
                ×
              </div>
              <img src="img/avatar/3.jpg" alt />
            </div>
            <div className="info">
              <h4>
                chris doe
              </h4>
              <span>4 mutual friend</span>
              <button>
                add friend
              </button>
            </div>
          </div>
          {/**/}
          <div className="item">
            <div className="person-img">
              <div className="icon">
                ×
              </div>
              <img src="img/avatar/2.jpg" alt />
            </div>
            <div className="info">
              <h4>
                katie adam
              </h4>
              <span>4 mutual friend</span>
              <button>
                add friend
              </button>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </div>
  </div>



  )
}
export default  Content;
