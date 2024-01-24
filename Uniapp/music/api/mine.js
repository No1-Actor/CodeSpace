import baseUrl from './request.js'

// 我的页面的所有接口
export const apiGetUserInfo = (uid) => {
	return uni.request({
		url: `${baseUrl}/user/detail`,
		method: 'get',
		data: {
			uid: uid
		}
	})
}