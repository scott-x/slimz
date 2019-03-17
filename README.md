## description
utils for node.js

## API
### getTimeString(type)
```
const { getTimeString } = require('slimz');
getTimeString(type)

```
#### type option
- `getTimeString()`: 2019年03月17日 11:31:18
- `getTimeString('yyyymmdd')`: 20190317
- `getTimeString('yyyy年mm月dd日')`: 2019年03月17日
- `getTimeString('yyyy-mm-dd')`: 2019-03-17
- `getTimeString('yyyy/mm/dd')`: 2019/03/17
- `getTimeString('mmdd')`: 0317
- `getTimeString('mm月dd日')`: 03月17日
- `getTimeString('mm-dd')`: 03-17
- `getTimeString('mm/dd')`: 03/17
- `getTimeString('hh:mm:ss')`: 11:31:18
- `getTimeString('hh时:mm分:ss秒')`: 11时31分18秒


