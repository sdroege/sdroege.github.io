(function() {var implementors = {};
implementors["bytes"] = [];
implementors["cairo"] = [];
implementors["gdk"] = [];
implementors["gdk_pixbuf"] = [];
implementors["gio"] = [];
implementors["glib"] = [];
implementors["gstreamer"] = [];
implementors["gstreamer_app"] = [];
implementors["gstreamer_audio"] = [];
implementors["gstreamer_player"] = [];
implementors["gstreamer_video"] = [];
implementors["gtk"] = [];
implementors["libc"] = [];
implementors["mio"] = [];
implementors["pango"] = [];
implementors["tokio_core"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
