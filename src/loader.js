aosamesan = window.aosamesan || {}
aosamesan.common = aosamesan.common || {}
aosamesan.controllers = aosamesan.controllers || {}
window.aosamesan = aosamesan

aosamesan.common.load = function (file, callback) {
    require([file], function (m) {
        aosamesan.controllers = Object.assign(m, aosamesan.controllers)
        if (callback) {
            callback()
        }
    })
}