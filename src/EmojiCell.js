export default function EmojiCell({
  emojiPair,
  activeEmojiName,
  setActiveEmojiName,
}) {
  const name = emojiPair.name;
  const color = emojiPair.color;

  const emojify = (name) => {
    return <img src={`emojis/${name}.png`} alt="emoji" />;
  };

  return (
    <>
      <div className="EmojiCell" onClick={() => setActiveEmojiName(name)}>
        {emojify(name)}
      </div>
    </>
  );
}
