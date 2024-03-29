import React from 'react';
import styled from 'styled-components';

// icons
import { IoClose } from 'react-icons/io5';

import { tagType } from './DropSelector';

interface IProps {
  children?: React.ReactNode;
  color?: string;
  pk?: number;
  name?: string;
  onClick?: (tag: tagType) => void;
  onClickDelete?: (tag: tagType) => void | undefined;
  isActived?: boolean;
}

/** 태그 컴포넌트 */
const Tag = ({
  children,
  color,
  pk = 1,
  name = '',
  onClick,
  onClickDelete,
  isActived,
}: IProps) => {
  const handleDeleteClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    // 이벤트 버블링을 막음
    e.stopPropagation();

    if (onClickDelete) {
      onClickDelete({ id: pk, name: name });
    }
  };
  return (
    <StyledTag
      $color={color}
      $isActived={isActived}
      onClick={() => {
        if (onClick) {
          onClick({ id: pk, name: name });
        }
      }}
    >
      {children}
      {onClickDelete && (
        <CloseIcon
          onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
            handleDeleteClick(e)
          }
        />
      )}
    </StyledTag>
  );
};

export default Tag;

const StyledTag = styled.div<{ $color?: string; $isActived?: boolean }>`
  width: fit-content;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  background-color: ${(props) =>
    props.$color ? props.$color : props.theme.green};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  opacity: ${(props) => (props.$isActived ? '0.8' : '1')};

  &:hover {
    opacity: 0.8;
  }
`;

const CloseIcon = styled(IoClose)``;
