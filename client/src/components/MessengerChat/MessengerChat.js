import React from "react";

function MessengerChat() {
  // Lấy ID từ hình ảnh bạn gửi: 851532708049798
  const pageId = "851532708049798"; 
  const messengerUrl = `https://m.me/${pageId}`;

  return (
    <div style={styles.chatContainer}>
      <a
        href={messengerUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.chatButton}
        title="Chat với chúng tôi qua Messenger"
      >
        {/* Icon Messenger chính chủ */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
          alt="Messenger"
          style={styles.icon}
        />
      </a>
    </div>
  );
}

const styles = {
  chatContainer: {
    position: "fixed",
    bottom: "120px",
    right: "20px",
    zIndex: 1000, // Đảm bảo luôn nổi trên cùng
  },
  chatButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  icon: {
    width: "60px",
    height: "60px",
  },
};

export default MessengerChat;