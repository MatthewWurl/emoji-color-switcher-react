import { getGradient } from "../Utils/utils";

export default function EmojiCell({ emoji, activeEmoji, setActiveEmoji }) {
  const { color, name } = emoji;

  const emojify = (name) => {
    return <img src={`emojis/${name}.png`} alt="emoji" />;
  };

  const animationClass = name === activeEmoji.name ? "bounce" : "";

  return (
    <>
      <div className="emoji-cell" onClick={() => setActiveEmoji(emoji)}>
        <div className="emoji-cell--top" style={getGradient(color)}>
          <span className={animationClass}>{emojify(name)}</span>
        </div>
        <div className="emoji-cell--bottom" style={{ color: color }}>
          {color}
        </div>
      </div>
    </>
  );
}
