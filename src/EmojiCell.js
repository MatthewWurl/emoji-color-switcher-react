const emojify = (emojiName) => {
  return <img src={`emojis/${emojiName}.png`} alt="emoji" />;
};

export default function EmojiCell({ emojiPair }) {
  return <div className="EmojiCell">{emojify(emojiPair.name)}</div>;
}
