import { useRecoilState } from 'recoil';
import { Dropdown } from '~/components/ui';
//import { applyFontSize } from '~/utils';
import { useLocalize } from '~/hooks';
import store from '~/store';

export default function ChatWidthSelector() {
  const [chatWidth, setChatWidth] = useRecoilState(store.chatWidth);
  const localize = useLocalize();

  const handleChange = (val: string) => {
    setChatWidth(val);
    //applyFontSize(val);
  };

  const options = [
    { value: 'chat-width-narrower', display: localize('com_nav_chat_width_narrower') },
    { value: 'chat-width-base', display: localize('com_nav_chat_width_base') },
    { value: 'chat-width-wider', display: localize('com_nav_chat_width_wider') },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <div>{localize('com_nav_chat_width')}</div>
      <Dropdown
        value={chatWidth}
        options={options}
        onChange={handleChange}
        testId="chat-width-selector"
        sizeClasses="w-[150px]"
        anchor="bottom start"
      />
    </div>
  );
}
