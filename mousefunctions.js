let cursor = $('.cursor')
let follower = $('.cursor-follower')

let posX = 0
let posY = 0
let mouseX = 0
let mouseY = 0

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9
		posY += (mouseY - posY) / 9

		TweenMax.set(follower, {
			css: {
				left: posX - 20,
				top: posY - 20
			}
		})

		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		})
	}
})

const audio = document.getElementById('audio')
audio.volume = 0.8

$(document).on('mousemove', function(e) {
	mouseX = e.pageX
	mouseY = e.pageY
})

$('.img-wrapper01 .img01').on('mouseenter', function() {
	cursor.addClass('active')
	follower.addClass('active')
})

$('.img-wrapper01 .img01').on('mouseleave', function() {
	cursor.removeClass('active')
	follower.removeClass('active')
})

$('.img-wrapper01 .img01').on('click', function() {
	$('#audio')[0].volume = 0

	if (audio.paused) {
		audio.play()
		$('#audio').animate({ volume: 1 }, 1000)
	} else {
		audio.pause()
	}
})
