(function() {var implementors = {};
implementors["futures"] = [];
implementors["gstreamer"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"gstreamer/struct.BusStream.html\" title=\"struct gstreamer::BusStream\">BusStream</a>",];
implementors["gstreamer_app"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"gstreamer/bus/struct.BusStream.html\" title=\"struct gstreamer::bus::BusStream\">BusStream</a>",];
implementors["gstreamer_audio"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"gstreamer/bus/struct.BusStream.html\" title=\"struct gstreamer::bus::BusStream\">BusStream</a>",];
implementors["gstreamer_player"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"gstreamer/bus/struct.BusStream.html\" title=\"struct gstreamer::bus::BusStream\">BusStream</a>",];
implementors["gstreamer_video"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"gstreamer/bus/struct.BusStream.html\" title=\"struct gstreamer::bus::BusStream\">BusStream</a>",];
implementors["tokio_core"] = ["impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/framed_read/struct.FramedRead.html\" title=\"struct tokio_io::framed_read::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tokio_io/framed_read/trait.Decoder.html\" title=\"trait tokio_io::framed_read::Decoder\">Decoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/length_delimited/struct.Framed.html\" title=\"struct tokio_io::length_delimited::Framed\">Framed</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/framed_write/struct.FramedWrite.html\" title=\"struct tokio_io::framed_write::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","impl&lt;A&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/lines/struct.Lines.html\" title=\"struct tokio_io::lines::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>","impl&lt;T, U&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/framed/struct.Framed.html\" title=\"struct tokio_io::framed::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"tokio_io/framed_read/trait.Decoder.html\" title=\"trait tokio_io::framed_read::Decoder\">Decoder</a>,&nbsp;</span>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_core/io/trait.Io.html\" title=\"trait tokio_core::io::Io\">Io</a>, C:&nbsp;<a class=\"trait\" href=\"tokio_core/io/trait.Codec.html\" title=\"trait tokio_core::io::Codec\">Codec</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/io/struct.Framed.html\" title=\"struct tokio_core::io::Framed\">Framed</a>&lt;T, C&gt;","impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/net/struct.Incoming.html\" title=\"struct tokio_core::net::Incoming\">Incoming</a>","impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_core/net/trait.UdpCodec.html\" title=\"trait tokio_core::net::UdpCodec\">UdpCodec</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/net/struct.UdpFramed.html\" title=\"struct tokio_core::net::UdpFramed\">UdpFramed</a>&lt;C&gt;","impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.Interval.html\" title=\"struct tokio_core::reactor::Interval\">Interval</a>",];
implementors["tokio_io"] = ["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.Framed.html\" title=\"struct tokio_io::codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"tokio_io/codec/trait.Decoder.html\" title=\"trait tokio_io::codec::Decoder\">Decoder</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.FramedRead.html\" title=\"struct tokio_io::codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tokio_io/codec/trait.Decoder.html\" title=\"trait tokio_io::codec::Decoder\">Decoder</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.FramedWrite.html\" title=\"struct tokio_io::codec::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>, B:&nbsp;<a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.Framed.html\" title=\"struct tokio_io::codec::length_delimited::Framed\">Framed</a>&lt;T, B&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::codec::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>, B:&nbsp;<a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::codec::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt;","impl&lt;A&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Lines.html\" title=\"struct tokio_io::io::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
