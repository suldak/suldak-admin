import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { BsFillTriangleFill } from 'react-icons/bs';

interface Option {
  value: any;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (selected: Option) => void;
  placeholder?: string;
}

/** 드롭다운 컴포넌트 */
const Dropdown = ({
  options,
  onSelect,
  placeholder = 'Select...',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 드롭다운 on/off
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // 드롭다운 메뉴 선택
  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  // 이벤트 리스너 등록
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownHeader onClick={handleToggle}>
        {selectedOption ? selectedOption.label : placeholder}
        <Arrow $isOpen={isOpen} />
        {/* This is a down arrow unicode character */}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;

const DropdownWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => props.theme.componentBgColor};
  border: 1px solid ${(props) => props.theme.form.border};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.text.secondary};
  cursor: pointer;
`;

const Arrow = styled(BsFillTriangleFill)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.3s ease-in-out;
  font-size: 0.5rem;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.componentBgColor};
  border: 1px solid ${(props) => props.theme.form.border};
  color: ${(props) => props.theme.text.secondary};
  border-radius: 0.25rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
`;

const DropdownListItem = styled.li`
  padding: 0.5rem 0.75rem;
  height: 2.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
