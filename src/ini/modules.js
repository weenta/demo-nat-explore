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
  {
    name: 'Modal',
    functions: [{
      name: 'Alert',
      path: 'views/modal/alert.js'
    }, {
      name: 'Confirm',
      path: 'views/modal/confirm.js'
    }, {
      name: 'Prompt',
      path: 'views/modal/prompt.js'
    }, {
      name: 'Toast',
      path: 'views/modal/toast.js'
    }]
  },
  {
    name: 'Stream',
    functions: [{
      name: 'Fetch',
      path: 'views/stream/fetch.js'
    }, {
      name: 'Confirm',
      path: 'views/stream/transfer.js'
    }]
  },
]

export default modules
