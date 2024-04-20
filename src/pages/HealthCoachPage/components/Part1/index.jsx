import './index.scss'
export default function PPartt1() {
    return (
        <div className='pparrtt1'>
            <div className='text animate__animated animate__backInLeft' style={{ animationDuration: "6s" }}>
                <p>
                    When life is busy, or all your energy is focused on a special project, it's all too easy to find yourself off balance, not paying enough attention to important areas of your life. While you need to have drive and focus if you're going to get things done, taking this too far can lead to frustration and intense stress.<br/>
                    That's when it's time to take a "helicopter view" of your life, so that you can bring things back into balance.<br/>
                    This is where the lifestyle wheel can help. Commonly used by professional life coaches, it helps you consider each area of your life in turn and assess what's off balance. As such, it helps you to identify areas that need more attention.
                </p>
            </div>
            <div className='photo animate__animated animate__backInRight' style={{ animationDuration: "6s" }}>
                <img src={require('../../../../Assetss/9.jpg')} />
            </div>
        </div>
    )
}
