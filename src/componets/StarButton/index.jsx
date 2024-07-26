import {Button} from 'antd';
import { StarFilled, StarOutlined } from "@ant-design/icons";

export default function StarButton({isFavorite, onClick}) {
  const iconToRender = isFavorite ? <StarFilled/> : <StarOutlined/>

  return <Button icon={iconToRender} onClick={onClick}/>
}