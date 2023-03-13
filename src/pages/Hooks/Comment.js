import React, { memo } from 'react'
function Comment(props) {
    console.log('comment');
    return (
        <div>
            {props.renderNotify()}
            <br />
            <textarea></textarea> <br />
            <button>Gửi</button>
        </div>
    )
}
// Sử dụng memo để bao component lại khi thay đổi sẽ render lại
// Nếu không có memo thì mặc định dù state thay đổi hay không thay đổi vẫn sẽ render lại
export default memo(Comment);
