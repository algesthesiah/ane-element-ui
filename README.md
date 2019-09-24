# element-ui 一些便捷操作

## 需要在vue 和 element-ui 之后引入

``` javascript
import 'ane-element-ui'
```

## 便捷弹窗

### 用法
``` javascript
this.$msg({
  title: '确认重启',
  msg: `你确认要重启服务${name}吗？`,
  callBack: () => this.postStackRollback({
    teamId,
    envId,
    stackName,
    params: {
      stack_ns, name, wise2cServiceType
    }
  }),
}).then(() => this.reGetStacks(team_id, envId))

```
### 效果
![效果](./img/msg.png)
