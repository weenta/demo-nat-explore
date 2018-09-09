const modules = [
  {
    name: 'Communication',
    functions: [{
      name: 'Call',
      path: 'views/communication/call.js'
    }, {
      name: 'Mail',
      path: 'views/communication/mail.js'
    }, {
      name: 'Sms',
      path: 'views/communication/sms.js'
    }]
  },
  {
    name: 'Media',
    functions: [{
      name: 'Image',
      path: 'views/media/image.js'
    }, {
      name: 'Audio',
      path: 'views/media/audio.js'
    }, {
      name: 'Video',
      path: 'views/media/video.js'
    }]
  },
  {
    name: 'Camera',
    functions: [{
      name: 'captureImage',
      path: 'views/camera/captureImage.js'
    }, {
      name: 'captureVideo',
      path: 'views/camera/captureVideo.js'
    }]
  },
  {
    name: 'Recorder',
    functions: [{
      name: 'Recorder',
      path: 'views/recorder/recorder.js'
    }]
  },
]

export default modules
