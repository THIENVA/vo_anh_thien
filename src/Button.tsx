type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};

function Button({ title, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
relative
bg-gradient-to-b from-[#f7b45a] via-[#e79a35] to-[#d67f1f]
text-white font-bold
rounded-3xl
cursor-pointer
whitespace-nowrap
mx-auto block
pt-5 pb-5
py-2 px-4
overflow-hidden
before:content-['']
before:absolute
before:top-[0.38rem]
before:left-[0.38rem]
before:right-[0.38rem]
before:h-[45%]
before:rounded-3xl
focus:outline
focus:outline-2
focus:outline-[#e7870a]
active:outline
active:outline-2
active:outline-[#e7870a]
focus:shadow-[inset_0_4px_8px_rgba(255,255,255,0.45),0_0_15px_#e7870a]
active:shadow-[inset_0_4px_8px_rgba(255,255,255,0.45),0_0_15px_#e7870a]
border-[3px] border-[#ebad0f]
${className || ""}
      `}
    >
      {title}
    </button>
  );
}

export default Button;
