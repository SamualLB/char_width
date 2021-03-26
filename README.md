# char_width

Check the width of a string. Should take into account combined characters and stuff.

Useful in console applications to stop weird formatting on some none-English characters.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     char_width:
       github: SamualLB/char_width
   ```

2. Run `shards install`

## Usage

```crystal
require "char_width"
```

Spec file is helpful, otherwise:

```crystal
'a'.width # => 1
'\0'.width # => 0
'\r'.width # => -1

"abcde".width # => 5
"Tab\tSpace".width # => -1
```

## Development

TODO: Write development instructions here

## Contributing

1. Fork it (<https://github.com/SamualLB/char_width/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [Samual Black](https://github.com/SamualLB) - creator and maintainer
