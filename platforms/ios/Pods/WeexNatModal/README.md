# nat-modal

- [Documentation](http://natjs.com/#/reference/modal)
- [Github](https://github.com/natjs/weex-nat-modal)

## Installation
```
weexpack plugin add nat-modal
```

```
npm i natjs
```

## Usage

Use in weex project (`.vue`/`.we`)

```html
<script>
import Nat from 'natjs'

// alert
Nat.alert('Hello Nat!')

// confirm
Nat.confirm('This is a confirm dialog with callback', (err, ret) => {
    console.log((ret) ? 'confirmed' : 'canceled')
})

// prompt
Nat.prompt('This is a prompt dialog with callback', (err, ret) => {
    console.log((ret.result) ? 'prompted\n' + ret.data : 'canceled')
})

// toast
Nat.toast('Hello Nat!')

</script>
```

See the Nat [Documentation](http://natjs.com/) for more details.
