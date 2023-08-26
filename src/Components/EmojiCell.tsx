import Emoji from "../emoji";
import { getGradient } from "../lib/gradient";

type EmoijCellProps = {
  emoji: Emoji;
  activeEmoji: Emoji;
  setActiveEmoji: React.Dispatch<React.SetStateAction<Emoji>>;
};

const EmojiCell = ({ emoji, activeEmoji, setActiveEmoji }: EmoijCellProps) => {
  const { color, name } = emoji;
  const animationClass = name === activeEmoji.name ? "bounce" : "";

  const emojify = ({ name }: Emoji) => {
    return <img src={`emojis/${name}.png`} alt={name} />;
  };

  return (
    <>
      <div className="emoji-cell" onClick={() => setActiveEmoji(emoji)}>
        <div className="emoji-cell--top" style={getGradient(color)}>
          <span className={animationClass}>{emojify(emoji)}</span>
        </div>
        <div className="emoji-cell--bottom" style={{ color: color }}>
          {color}
        </div>
      </div>
    </>
  );
};

export default EmojiCell;
