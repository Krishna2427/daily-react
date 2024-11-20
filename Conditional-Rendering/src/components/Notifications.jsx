const Notifications = ({ unreadCount }) => {
    return (
        <div>
            {unreadCount > 0 && <p> you have {unreadCount} unreaded message</p>}
        </div>
    )
}
export default Notifications;