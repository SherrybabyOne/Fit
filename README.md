引入了**weui**、**iView Weapp**

globalData为内存,storage为缓存。小程序退出globalData会清空,storage则不会。

token存在客户端的storage下。
用户的信息保存在globalData下。

涉及到globalData信息的修改,在各个页面引入Page.data,先更新Page.data,再更新globalData

微信用户本身携带的信息:
```
userInfo: {
  avatarUrl,
  city,
  country,
  gender,
  language,
  nickName,
  province
}
```
后端返回用户信息:
```
userInfo: {
  avatar_url,
  age,
  weight,
  height,
  liked,
  pickname,
  phone,
  signature,
  user_id
}
```