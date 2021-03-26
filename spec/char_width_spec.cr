require "./spec_helper"

describe Char do
  describe "#width" do
    it "returns 1 for ASCII chars" do
      'a'.width.should eq 1
      'Z'.width.should eq 1
      '-'.width.should eq 1
      ' '.width.should eq 1
    end

    it "returns 0 for null character" do
      '\0'.width.should eq 0
    end

    it "returns -1 for control characters" do
      '\t'.width.should eq -1
      '\r'.width.should eq -1
      '\n'.width.should eq -1
    end
  end
end

describe String do
  describe "#width" do
    it "returns 0 for empty Strings" do
      "".width.should eq 0
    end

    it "returns number of characters for ascii" do
      "abcde".width.should eq 5
      "123abc".width.should eq 6
      "123 abc".width.should eq 7
    end

    it "treats null character as 0 width" do
      "abc\0".width.should eq 3
      "abc\0abc".width.should eq 6
    end

    it "returns -1 when encountering any control character" do
      "\t".width.should eq -1
      "Tab\tSpace".width.should eq -1
    end

    it "returns correct width for ancient Greek" do
      "Ἰοὺ ἰού· τὰ πάντʼ ἂν ἐξήκοι σαφῆ.".width.should eq 33
    end

    it "returns correct width for Russian" do
      "По оживлённым берегам".width.should eq 21
    end
  end

  describe "width_cjk" do
    it "only effects non-ambiguos CJK characters" do
      "".width_cjk.should eq 0
      "Hello!".width_cjk.should eq 6
    end

    it "still returns -1 when encountering control characters" do
      "По оживлённым берегам\n".width_cjk.should eq -1
      "Tab\tSpace".width_cjk.should eq -1
    end

    it "defines the width of ambiguous characters as 2" do
      "По оживлённым берегам".width_cjk.should eq 40
    end
  end
end
