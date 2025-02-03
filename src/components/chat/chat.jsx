import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import './chat.css'

const Chat = () => {
  const [openEmoji, setOpenEmoji] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const endRef = React.useRef(null)

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleEmoji = (e) => {
    setMessage((prev) => prev + e.emoji)
    setOpenEmoji(false)
  }

  return (
    <div className="chat">
      <div className="top ">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus exercitationem hic expedita fugit quisquam! Veniam atque
              repudiandae enim sequi consectetur saepe magnam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus exercitationem hic expedita fugit quisquam! Veniam atque
              repudiandae enim sequi consectetur saepe magnam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus exercitationem hic expedita fugit quisquam! Veniam atque
              repudiandae enim sequi consectetur saepe magnam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus exercitationem hic expedita fugit quisquam! Veniam atque
              repudiandae enim sequi consectetur saepe magnam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus exercitationem hic expedita fugit quisquam! Veniam atque
              repudiandae enim sequi consectetur saepe magnam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY2P9ED0Y-backdrop_wide"
              alt="code-geass"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus exercitationem hic expedita fugit quisquam! Veniam atque
              repudiandae enim sequi consectetur saepe magnam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  )
}

export default Chat
