initSidebarItems({"enum":[["Type","A GLib or GLib-based library type"]],"fn":[["type_find_helper",""],["type_find_helper_for_buffer",""],["type_find_helper_for_extension",""]],"mod":[["functions",""],["functions",""],["prelude",""]],"struct":[["Adapter","This class is for elements that receive buffers in an undesired size. While for example raw video contains one image per buffer, the same is not true for a lot of other formats, especially those that come directly from a file. So if you have undefined buffer sizes and require a specific size, this object is for you."],["BaseSink","`BaseSink` is the base class for sink elements in GStreamer, such as xvimagesink or filesink. It is a layer on top of `gst::Element` that provides a simplified interface to plugin writers. `BaseSink` handles many details for you, for example: preroll, clock synchronization, state changes, activation in push or pull mode, and queries."],["BaseSrc","This is a generic base class for source elements. The following types of sources are supported:"],["BaseTransform","This base class is for filter elements that process data. Elements that are suitable for implementation using `BaseTransform` are ones where the size and caps of the output is known entirely from the input caps and buffer sizes. These include elements that directly transform one buffer into another, modify the contents of a buffer in-place, as well as elements that collate multiple input buffers into one output buffer, or that expand one input buffer into multiple output buffers. See below for more concrete use cases."],["Continue","Continue calling the closure in the future iterations or drop it."],["Error","A generic error capable of representing various error domains (types)."],["FlowCombiner","Utility struct to help handling `gst::FlowReturn` combination. Useful for `gst::Element`s that have multiple source pads and need to combine the different `gst::FlowReturn` for those pads."],["PushSrc","This class is mostly useful for elements that cannot do random access, or at least very slowly. The source usually prefers to push out a fixed size buffer."],["TypedValue","A statically typed `Value`."],["Value","A generic value capable of carrying various types."]],"trait":[["BaseSinkExt","Trait containing all `BaseSink` methods."],["BaseSrcExt","Trait containing all `BaseSrc` methods."],["BaseTransformExt","Trait containing all `BaseTransform` methods."],["Cast","Upcasting and downcasting support."],["IsA","Declares the \"is a\" relationship."],["StaticType","Types that are supported by GLib dynamic typing."],["ToValue","Converts to `Value`."]]});