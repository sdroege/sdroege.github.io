initSidebarItems({"enum":[["ForceKeyUnitEvent",""],["Type","A GLib or GLib-based library type"],["VideoColorMatrix","The color matrix is used to convert between Y'PbPr and non-linear RGB (R'G'B')"],["VideoColorPrimaries","The color primaries define the how to transform linear RGB values to and from the CIE XYZ colorspace."],["VideoColorRange","Possible color range values. These constants are defined for 8 bit color values and can be scaled for other bit depths."],["VideoEndianness",""],["VideoFieldOrder","Field order of interlaced content. This is only valid for interlace-mode=interleaved and not interlace-mode=mixed. In the case of mixed or GST_VIDEO_FIELD_ORDER_UNKOWN, the field order is signalled via buffer flags."],["VideoFormat","Enum value describing the most common video formats."],["VideoInterlaceMode","The possible values of the `VideoInterlaceMode` describing the interlace mode of the stream."],["VideoMultiviewFramePacking","`VideoMultiviewFramePacking` represents the subset of `VideoMultiviewMode` values that can be applied to any video frame without needing extra metadata. It can be used by elements that provide a property to override the multiview interpretation of a video stream when the video doesn't contain any markers."],["VideoMultiviewMode","All possible stereoscopic 3D and multiview representations. In conjunction with `VideoMultiviewFlags`, describes how multiview content is being transported in the stream."],["VideoTileMode","Enum value describing the available tiling modes."],["VideoTransferFunction","The video transfer function defines the formula for converting between non-linear RGB (R'G'B') and linear RGB"]],"fn":[["center_video_rectangle",""],["convert_sample",""],["convert_sample_async",""],["is_force_key_unit_event",""],["new_downstream_force_key_unit_event",""],["new_still_frame_event",""],["new_upstream_force_key_unit_event",""],["parse_downstream_force_key_unit_event",""],["parse_force_key_unit_event",""],["parse_still_frame_event",""],["parse_upstream_force_key_unit_event",""]],"mod":[["prelude",""],["video_frame",""]],"struct":[["Continue","Continue calling the closure in the future iterations or drop it."],["DownstreamForceKeyUnitEvent",""],["DownstreamForceKeyUnitEventBuilder",""],["Error","A generic error capable of representing various error domains (types)."],["StillFrameEvent",""],["StillFrameEventBuilder",""],["TypedValue","A statically typed `Value`."],["UpstreamForceKeyUnitEvent",""],["UpstreamForceKeyUnitEventBuilder",""],["Value","A generic value capable of carrying various types."],["VideoChromaSite",""],["VideoColorimetry","Structure describing the color info."],["VideoFilter","Provides useful functions and a base class for video filters."],["VideoFlags",""],["VideoFormatFlags",""],["VideoFormatInfo","Information for a video format."],["VideoFrameFlags",""],["VideoInfo","Information describing image properties. This information can be filled in from GstCaps with `VideoInfo::from_caps`. The information is also used to store the specific video info when mapping a video frame with `VideoFrame::map`."],["VideoInfoBuilder",""],["VideoMultiviewFlags",""],["VideoOverlay","The `VideoOverlay` interface is used for 2 main purposes :"],["VideoRectangle",""]],"trait":[["Cast","Upcasting and downcasting support."],["IsA","Declares the \"is a\" relationship."],["StaticType","Types that are supported by GLib dynamic typing."],["ToValue","Converts to `Value`."],["VideoOverlayExt","Trait containing all `VideoOverlay` methods."],["VideoOverlayExtManual",""]]});