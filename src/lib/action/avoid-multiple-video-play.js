export const avoidMultipleVideoPlay = (node) => {
	let videos = node.querySelectorAll('video')
	videos.forEach(v => {
		v.onplay = () => {
			videos.forEach(_v => {
				if (_v !== v) _v.pause()
			})
		}
	})
}