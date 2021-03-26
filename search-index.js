crystal_doc_search_index_callback({"repository_name":"char_width","body":"# char_width\n\nCheck the width of a string. Should take into account combined characters and stuff.\n\nUseful in console applications to stop weird formatting on some none-English characters.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n```yaml\ndependencies:\n  char_width:\n    github: SamualLB/char_width\n```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"char_width\"\n```\n\nSpec file is helpful, otherwise:\n\n```crystal\n'a'.width # => 1\n'\\0'.width # => 0\n'\\r'.width # => -1\n\n\"abcde\".width # => 5\n\"Tab\\tSpace\".width # => -1\n```\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/SamualLB/char_width/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Samual Black](https://github.com/SamualLB) - creator and maintainer\n","program":{"html_id":"char_width/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"char_width","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"char_width/Char","path":"Char.html","kind":"struct","full_name":"Char","name":"Char","abstract":false,"superclass":{"html_id":"char_width/Value","kind":"struct","full_name":"Value","name":"Value"},"ancestors":[{"html_id":"char_width/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"},{"html_id":"char_width/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"char_width/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/char_width.cr","line_number":1,"url":"https://github.com/SamualLB/char_width/blob/431ec56cc3bfe1adabfc7387a7442510b5f77779/src/char_width.cr#L1"}],"repository_name":"char_width","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[{"id":"UNICODE_COMBINING_CHARS","name":"UNICODE_COMBINING_CHARS","value":"{768..879, 1155..1158, 1160..1161, 1425..1469, 1471..1471, 1473..1474, 1476..1477, 1479..1479, 1536..1539, 1552..1557, 1611..1630, 1648..1648, 1750..1764, 1767..1768, 1770..1773, 1807..1807, 1809..1809, 1840..1866, 1958..1968, 2027..2035, 2305..2306, 2364..2364, 2369..2376, 2381..2381, 2385..2388, 2402..2403, 2433..2433, 2492..2492, 2497..2500, 2509..2509, 2530..2531, 2561..2562, 2620..2620, 2625..2626, 2631..2632, 2635..2637, 2672..2673, 2689..2690, 2748..2748, 2753..2757, 2759..2760, 2765..2765, 2786..2787, 2817..2817, 2876..2876, 2879..2879, 2881..2883, 2893..2893, 2902..2902, 2946..2946, 3008..3008, 3021..3021, 3134..3136, 3142..3144, 3146..3149, 3157..3158, 3260..3260, 3263..3263, 3270..3270, 3276..3277, 3298..3299, 3393..3395, 3405..3405, 3530..3530, 3538..3540, 3542..3542, 3633..3633, 3636..3642, 3655..3662, 3761..3761, 3764..3769, 3771..3772, 3784..3789, 3864..3865, 3893..3893, 3895..3895, 3897..3897, 3953..3966, 3968..3972, 3974..3975, 3984..3991, 3993..4028, 4038..4038, 4141..4144, 4146..4146, 4150..4151, 4153..4153, 4184..4185, 4448..4607, 4959..4959, 5906..5908, 5938..5940, 5970..5971, 6002..6003, 6068..6069, 6071..6077, 6086..6086, 6089..6099, 6109..6109, 6155..6157, 6313..6313, 6432..6434, 6439..6440, 6450..6450, 6457..6459, 6679..6680, 6912..6915, 6964..6964, 6966..6970, 6972..6972, 6978..6978, 7019..7027, 7616..7626, 7678..7679, 8203..8207, 8234..8238, 8288..8291, 8298..8303, 8400..8431, 12330..12335, 12441..12442, 43014..43014, 43019..43019, 43045..43046, 64286..64286, 65024..65039, 65056..65059, 65279..65279, 65529..65531, 68097..68099, 68101..68102, 68108..68111, 68152..68154, 68159..68159, 119143..119145, 119155..119170, 119173..119179, 119210..119213, 119362..119364, 917505..917505, 917536..917631, 917760..917999}","doc":"Based on https://www.cl.cam.ac.uk/~mgk25/ucs/wcwidth.c\n\nThis is an implementation of wcwidth() and wcswidth() (defined in\nIEEE Std 1002.1-2001) for Unicode.","summary":"<p>Based on https://www.cl.cam.ac.uk/~mgk25/ucs/wcwidth.c</p>"},{"id":"UNICODE_INTERVAL_CHARS","name":"UNICODE_INTERVAL_CHARS","value":"{161..161, 164..164, 167..168, 170..170, 174..174, 176..180, 182..186, 188..191, 198..198, 208..208, 215..216, 222..225, 230..230, 232..234, 236..237, 240..240, 242..243, 247..250, 252..252, 254..254, 257..257, 273..273, 275..275, 283..283, 294..295, 299..299, 305..307, 312..312, 319..322, 324..324, 328..331, 333..333, 338..339, 358..359, 363..363, 462..462, 464..464, 466..466, 468..468, 470..470, 472..472, 474..474, 476..476, 593..593, 609..609, 708..708, 711..711, 713..715, 717..717, 720..720, 728..731, 733..733, 735..735, 913..929, 931..937, 945..961, 963..969, 1025..1025, 1040..1103, 1105..1105, 8208..8208, 8211..8214, 8216..8217, 8220..8221, 8224..8226, 8228..8231, 8240..8240, 8242..8243, 8245..8245, 8251..8251, 8254..8254, 8308..8308, 8319..8319, 8321..8324, 8364..8364, 8451..8451, 8453..8453, 8457..8457, 8467..8467, 8470..8470, 8481..8482, 8486..8486, 8491..8491, 8531..8532, 8539..8542, 8544..8555, 8560..8569, 8592..8601, 8632..8633, 8658..8658, 8660..8660, 8679..8679, 8704..8704, 8706..8707, 8711..8712, 8715..8715, 8719..8719, 8721..8721, 8725..8725, 8730..8730, 8733..8736, 8739..8739, 8741..8741, 8743..8748, 8750..8750, 8756..8759, 8764..8765, 8776..8776, 8780..8780, 8786..8786, 8800..8801, 8804..8807, 8810..8811, 8814..8815, 8834..8835, 8838..8839, 8853..8853, 8857..8857, 8869..8869, 8895..8895, 8978..8978, 9312..9449, 9451..9547, 9552..9587, 9600..9615, 9618..9621, 9632..9633, 9635..9641, 9650..9651, 9654..9655, 9660..9661, 9664..9665, 9670..9672, 9675..9675, 9678..9681, 9698..9701, 9711..9711, 9733..9734, 9737..9737, 9742..9743, 9748..9749, 9756..9756, 9758..9758, 9792..9792, 9794..9794, 9824..9825, 9827..9829, 9831..9834, 9836..9837, 9839..9839, 10045..10045, 10102..10111, 57344..63743, 65533..65533, 983040..1048573, 1048576..1114109}","doc":null,"summary":null}],"included_modules":[{"html_id":"char_width/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"}],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"A `Char` represents a [Unicode](http://en.wikipedia.org/wiki/Unicode) [code point](http://en.wikipedia.org/wiki/Code_point).\nIt occupies 32 bits.\n\nIt is created by enclosing an UTF-8 character in single quotes.\n\n```\n'a'\n'z'\n'0'\n'_'\n'あ'\n```\n\nYou can use a backslash to denote some characters:\n\n```\n'\\'' # single quote\n'\\\\' # backslash\n'\\e' # escape\n'\\f' # form feed\n'\\n' # newline\n'\\r' # carriage return\n'\\t' # tab\n'\\v' # vertical tab\n```\n\nYou can use a backslash followed by an *u* and four hexadecimal characters to denote a unicode codepoint written:\n\n```\n'\\u0041' # == 'A'\n```\n\nOr you can use curly braces and specify up to four hexadecimal numbers:\n\n```\n'\\u{41}' # == 'A'\n```","summary":"<p>A <code><a href=\"Char.html\">Char</a></code> represents a <a href=\"http://en.wikipedia.org/wiki/Unicode\">Unicode</a> <a href=\"http://en.wikipedia.org/wiki/Code_point\">code point</a>.</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"width:Int32-instance-method","html_id":"width:Int32-instance-method","name":"width","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Int32","args_html":" : Int32","location":{"filename":"src/char_width.cr","line_number":112,"url":"https://github.com/SamualLB/char_width/blob/431ec56cc3bfe1adabfc7387a7442510b5f77779/src/char_width.cr#L112"},"def":{"name":"width","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Int32","visibility":"Public","body":"if ord == 0\n  return 0\nend\nif ord < 32 || (ord >= 127 && ord < 160)\n  return -1\nend\nUNICODE_COMBINING_CHARS.each do |range|\n  if range.includes?(ord)\n    return 0\n  end\nend\nif ord >= 4352 && (((((((((((ord <= 4447 || (ord == 9001)) || (ord == 9002)) || ((ord >= 11904 && ord <= 42191) && (ord != 12351))) || (ord >= 44032 && ord <= 55203)) || (ord >= 63744 && ord <= 64255)) || (ord >= 65040 && ord <= 65049)) || (ord >= 65072 && ord <= 65135)) || (ord >= 65280 && ord <= 65376)) || (ord >= 65504 && ord <= 65510)) || (ord >= 131072 && ord <= 196605)) || (ord >= 196608 && ord <= 262141))\n  return 2\nend\n1\n"}},{"id":"width_cjk:Int32-instance-method","html_id":"width_cjk:Int32-instance-method","name":"width_cjk","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Int32","args_html":" : Int32","location":{"filename":"src/char_width.cr","line_number":134,"url":"https://github.com/SamualLB/char_width/blob/431ec56cc3bfe1adabfc7387a7442510b5f77779/src/char_width.cr#L134"},"def":{"name":"width_cjk","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Int32","visibility":"Public","body":"UNICODE_INTERVAL_CHARS.each do |range|\n  if range.includes?(ord)\n    return 2\n  end\nend\nwidth\n"}}],"macros":[],"types":[]},{"html_id":"char_width/String","path":"String.html","kind":"class","full_name":"String","name":"String","abstract":false,"superclass":{"html_id":"char_width/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"char_width/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"},{"html_id":"char_width/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"char_width/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/char_width.cr","line_number":140,"url":"https://github.com/SamualLB/char_width/blob/431ec56cc3bfe1adabfc7387a7442510b5f77779/src/char_width.cr#L140"}],"repository_name":"char_width","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[{"html_id":"char_width/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"}],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"A `String` represents an immutable sequence of UTF-8 characters.\n\nA `String` is typically created with a string literal, enclosing UTF-8 characters\nin double quotes:\n\n```\n\"hello world\"\n```\n\nA backslash can be used to denote some characters inside the string:\n\n```\n\"\\\"\" # double quote\n\"\\\\\" # backslash\n\"\\e\" # escape\n\"\\f\" # form feed\n\"\\n\" # newline\n\"\\r\" # carriage return\n\"\\t\" # tab\n\"\\v\" # vertical tab\n```\n\nYou can use a backslash followed by an *u* and four hexadecimal characters to denote a unicode codepoint written:\n\n```\n\"\\u0041\" # == \"A\"\n```\n\nOr you can use curly braces and specify up to six hexadecimal numbers (0 to 10FFFF):\n\n```\n\"\\u{41}\" # == \"A\"\n```\n\nA string can span multiple lines:\n\n```\n\"hello\n      world\" # same as \"hello\\n      world\"\n```\n\nNote that in the above example trailing and leading spaces, as well as newlines,\nend up in the resulting string. To avoid this, you can split a string into multiple lines\nby joining multiple literals with a backslash:\n\n```\n\"hello \" \\\n\"world, \" \\\n\"no newlines\" # same as \"hello world, no newlines\"\n```\n\nAlternatively, a backslash followed by a newline can be inserted inside the string literal:\n\n```\n\"hello \\\n     world, \\\n     no newlines\" # same as \"hello world, no newlines\"\n```\n\nIn this case, leading whitespace is not included in the resulting string.\n\nIf you need to write a string that has many double quotes, parentheses, or similar\ncharacters, you can use alternative literals:\n\n```\n# Supports double quotes and nested parentheses\n%(hello (\"world\")) # same as \"hello (\\\"world\\\")\"\n\n# Supports double quotes and nested brackets\n%[hello [\"world\"]] # same as \"hello [\\\"world\\\"]\"\n\n# Supports double quotes and nested curlies\n%{hello {\"world\"}} # same as \"hello {\\\"world\\\"}\"\n\n# Supports double quotes and nested angles\n%<hello <\"world\">> # same as \"hello <\\\"world\\\">\"\n```\n\nTo create a `String` with embedded expressions, you can use string interpolation:\n\n```\na = 1\nb = 2\n\"sum = #{a + b}\" # \"sum = 3\"\n```\n\nThis ends up invoking `Object#to_s(IO)` on each expression enclosed by `#{...}`.\n\nIf you need to dynamically build a string, use `String#build` or `IO::Memory`.\n\n### Non UTF-8 valid strings\n\nString might end up being conformed of bytes which are an invalid\nbyte sequence according to UTF-8. This can happen if the string is created\nvia one of the constructors that accept bytes, or when getting a string\nfrom `String.build` or `IO::Memory`. No exception will be raised, but\ninvalid byte sequences, when asked as chars, will use the unicode replacement\nchar (value 0xFFFD). For example:\n\n```\n# here 255 is not a valid byte value in the UTF-8 encoding\nstring = String.new(Bytes[255, 97])\nstring.valid_encoding? # => false\n\n# The first char here is the unicode replacement char\nstring.chars # => ['�', 'a']\n```\n\nOne can also create strings with specific byte value in them by\nusing octal and hexadecimal escape sequences:\n\n```\n# Octal escape sequences\n\"\\101\" # # => \"A\"\n\"\\12\"  # # => \"\\n\"\n\"\\1\"   # string with one character with code point 1\n\"\\377\" # string with one byte with value 255\n\n# Hexadecimal escape sequences\n\"\\x41\" # # => \"A\"\n\"\\xFF\" # string with one byte with value 255\n```\n\nThe reason for allowing strings that don't have a valid UTF-8 sequence\nis that the world is full of content that isn't properly encoded,\nand having a program raise an exception or stop because of this\nis not good. It's better if programs are more resilient, but\nshow a replacement character when there's an error in incoming data.","summary":"<p>A <code><a href=\"String.html\">String</a></code> represents an immutable sequence of UTF-8 characters.</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"width:Int32-instance-method","html_id":"width:Int32-instance-method","name":"width","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Int32","args_html":" : Int32","location":{"filename":"src/char_width.cr","line_number":141,"url":"https://github.com/SamualLB/char_width/blob/431ec56cc3bfe1adabfc7387a7442510b5f77779/src/char_width.cr#L141"},"def":{"name":"width","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Int32","visibility":"Public","body":"width = 0\neach_char do |c|\n  if (w = c.width) < 0\n    return -1\n  end\n  width = width + w\nend\nwidth\n"}},{"id":"width_cjk:Int32-instance-method","html_id":"width_cjk:Int32-instance-method","name":"width_cjk","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Int32","args_html":" : Int32","location":{"filename":"src/char_width.cr","line_number":150,"url":"https://github.com/SamualLB/char_width/blob/431ec56cc3bfe1adabfc7387a7442510b5f77779/src/char_width.cr#L150"},"def":{"name":"width_cjk","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Int32","visibility":"Public","body":"width = 0\neach_char do |c|\n  if (w = c.width_cjk) < 0\n    return -1\n  end\n  width = width + w\nend\nwidth\n"}}],"macros":[],"types":[]}]}})