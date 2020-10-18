const SmoothScroll = (target, speed, smooth) => {
  let t = ''
  if (target === document) t = document.documentElement || document.body.parentNode || document.body
  let moving = false
  let pos = t.scrollTop

  const requestFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50)
      }
    )
  })()

  function update() {
    moving = true
    let delta = (pos - t.scrollTop) / smooth

    delta -= 1

    if (pos - t.scrollTop === smooth * 2) delta = 0

    t.scrollTop += delta
    if (Math.abs(delta) > 0.5) requestFrame(update)
    else moving = false
  }

  function scrolled(e) {
    e.preventDefault()
    let delta = e.delta || e.wheelDelta
    if (delta === undefined) {
      delta = -e.detail
    }
    delta = Math.max(-1, Math.min(1, delta))

    pos += -delta * speed
    pos = Math.max(0, Math.min(pos, t.scrollHeight - t.clientHeight + smooth * 2))

    if (!moving) update()
  }

  target.addEventListener('mousewheel', scrolled, { capture: false, passive: false })
}

export default SmoothScroll
