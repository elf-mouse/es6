// 第一组
import crc32 from 'crc32';
export default function crc32(){};

// 第二组
import { crc32 } from 'crc32';
export function crc32(){};

// 上面代码的两组写法，
// 第一组是使用export default时，对应的import语句不需要使用大括号；
// 第二组是不使用export default时，对应的import语句需要使用大括号。
