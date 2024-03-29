// With a grid size of n = 13, 183 unique icons will be needed
// N2 + N + 1 = points, in a finite projective plane. Each point needs a unique symbol.
const iconData = [
  "access_alarm",
  "accessibility",
  "accessibility_new",
  "adb",
  "add",
  "add_a_photo",
  "add_alarm",
  "alarm",
  "alarm_add",
  "album",
  "all_inclusive",
  "announcement",
  "api",
  "apps",
  "archive",
  "arrow_back",
  "arrow_downward",
  "arrow_drop_down",
  "arrow_drop_down_circle",
  "arrow_drop_up",
  "arrow_forward",
  "arrow_upward",
  "attach_file",
  "attach_money",
  "attachment",
  "autorenew",
  "backspace",
  "backup",
  "backup_table",
  "bathtub",
  "beach_access",
  "bed",
  "bookmark",
  "book",
  "border_all",
  "border_bottom",
  "border_clear",
  "border_color",
  "border_horizontal",
  "border_inner",
  "border_left",
  "border_outer",
  "border_right",
  "border_style",
  "border_top",
  "border_vertical",
  "build",
  "business_center",
  "cancel",
  "camera",
  "casino",
  "cast",
  "cast_connected",
  "center_focus_strong",
  "center_focus_weak",
  "change_history",
  "child_care",
  "child_friendly",
  "chrome_reader_mode",
  "class",
  "clear",
  "coffee",
  "collections",
  "collections_bookmark",
  "color_lens",
  "colorize",
  "comment",
  "compare_arrows",
  "compare",
  "computer",
  "contact_mail",
  "contact_phone",
  "contact_support",
  "control_camera",
  "create",
  "credit_card",
  "dashboard",
  "data_usage",
  "date_range",
  "delete",
  "delete_forever",
  "delete_outline",
  "developer_board",
  "developer_mode",
  "device_hub",
  "devices",
  "devices_other",
  "dialer_sip",
  "dialpad",
  "directions",
  "directions_bike",
  "directions_boat",
  "directions_bus",
  "directions_car",
  "directions_railway",
  "directions_run",
  "directions_subway",
  "directions_transit",
  "directions_walk",
  "dns",
  "done",
  "done_all",
  "done_outline",
  "donut_large",
  "donut_small",
  "drafts",
  "drag_handle",
  "drive_eta",
  "dvr",
  "edit",
  "edit_location",
  "eject",
  "email",
  "enhanced_encryption",
  "equalizer",
  "error",
  "error_outline",
  "euro_symbol",
  "ev_station",
  "event",
  "event_available",
  "event_busy",
  "event_note",
  "event_seat",
  "exit_to_app",
  "expand_less",
  "expand_more",
  "explicit",
  "explore",
  "exposure",
  "exposure_neg_1",
  "exposure_neg_2",
  "exposure_plus_1",
  "exposure_plus_2",
  "exposure_zero",
  "extension",
  "face",
  "fast_forward",
  "fast_rewind",
  "favorite",
  "favorite_border",
  "featured_play_list",
  "featured_video",
  "feedback",
  "fiber_dvr",
  "fiber_manual_record",
  "fiber_new",
  "fiber_pin",
  "fiber_smart_record",
  "file_download",
  "file_upload",
  "filter",
  "filter_1",
  "filter_2",
  "filter_3",
  "filter_4",
  "filter_5",
  "filter_6",
  "filter_7",
  "filter_8",
  "filter_9",
  "filter_9_plus",
  "filter_b_and_w",
  "filter_center_focus",
  "filter_drama",
  "filter_frames",
  "filter_hdr",
  "filter_list",
  "filter_none",
  "filter_tilt_shift",
  "filter_vintage",
  "find_in_page",
  "find_replace",
  "fingerprint",
  "first_page",
  "fitness_center",
  "flag",
  "flare",
  "flash_auto",
  "flash_off",
  "flash_on",
  "flight",
  "flight_land",
  "flight_takeoff",
  "flip",
  "flip_to_back",
  "flip_to_front",
  "folder",
  "folder_open",
  "folder_shared",
  "folder_special",
  "font_download",
  "format_align_center",
  "format_align_justify",
  "format_align_left",
  "format_align_right",
  "format_bold",
  "format_clear",
  "format_color_fill",
  "format_color_reset",
  "format_color_text",
  "format_indent_decrease",
  "format_indent_increase",
  "format_italic",
  "format_line_spacing",
  "format_list_bulleted",
  "format_list_numbered",
  "format_list_numbered_rtl",
  "format_paint",
  "format_quote",
  "format_shapes",
  "format_size",
  "format_strikethrough",
  "format_textdirection_l_to_r",
  "format_textdirection_r_to_l",
  "format_underlined",
  "forum",
  "forward",
  "forward_10",
  "forward_30",
  "forward_5",
  "free_breakfast",
  "fullscreen",
  "fullscreen_exit",
  "functions",
  "g_translate",
  "gamepad",
  "games",
  "gavel",
  "gesture",
  "get_app",
  "gif",
  "golf_course",
  "gps_fixed",
  "gps_not_fixed",
  "gps_off",
  "grade",
  "gradient",
  "grain",
  "graphic_eq",
  "grid_off",
  "grid_on",
  "group",
  "group_add",
  "group_work",
  "hd",
  "hdr_off",
  "hdr_on",
  "hdr_strong",
  "hdr_weak",
  "headset",
  "headset_mic",
  "healing",
  "hearing",
  "help",
  "help_outline",
  "high_quality",
  "highlight",
  "highlight_off",
  "history",
  "home",
  "hot_tub",
  "hotel",
  "hourglass_empty",
  "hourglass_full",
  "http",
  "https",
  "image",
  "image_aspect_ratio",
  "import_contacts",
  "import_export",
  "important_devices",
  "inbox",
  "indeterminate_check_box",
  "info",
  "input",
  "insert_chart",
  "insert_comment",
  "insert_drive_file",
  "insert_emoticon",
  "insert_invitation",
  "insert_link",
  "insert_photo",
  "invert_colors",
  "invert_colors_off",
  "iso",
  "keyboard",
  "keyboard_arrow_down",
  "keyboard_arrow_left",
  "keyboard_arrow_right",
  "keyboard_arrow_up",
  "keyboard_backspace",
  "keyboard_capslock",
  "keyboard_hide",
  "keyboard_return",
  "keyboard_tab",
  "keyboard_voice",
  "king_bed",
  "kitchen",
  "label",
  "label_important",
  "label_off",
  "landscape",
  "language",
  "laptop",
  "laptop_chromebook",
  "laptop_mac",
  "laptop_windows",
  "last_page",
  "launch",
  "layers",
  "layers_clear",
  "leak_add",
  "leak_remove",
  "lens",
  "library_add",
  "library_books",
  "library_music",
  "lightbulb",
  "line_style",
  "line_weight",
  "linear_scale",
  "link",
  "link_off",
  "linked_camera",
  "list",
  "live_help",
  "live_tv",
  "local_activity",
  "local_airport",
  "local_atm",
  "local_bar",
  "local_cafe",
  "local_car_wash",
  "local_convenience_store",
  "local_dining",
  "local_drink",
  "local_florist",
  "local_gas_station",
  "local_grocery_store",
  "local_hospital",
  "local_hotel",
  "local_laundry_service",
  "local_library",
  "local_mall",
  "local_movies",
  "local_offer",
  "local_parking",
  "local_pharmacy",
  "local_phone",
  "local_pizza",
  "local_play",
  "local_post_office",
  "local_printshop",
  "local_see",
  "local_shipping",
  "local_taxi",
  "location_city",
  "location_disabled",
  "location_off",
  "location_on",
  "location_searching",
  "lock",
  "lock_open",
  "lock_outline",
  "looks",
  "looks_3",
  "looks_4",
  "looks_5",
  "looks_6",
  "looks_one",
  "looks_two",
  "loop",
  "loupe",
  "low_priority",
  "loyalty",
  "mail",
  "mail_outline",
  "map",
  "markunread",
  "markunread_mailbox",
  "maximize",
  "meeting_room",
  "memory",
  "menu",
  "merge_type",
  "message",
  "mic",
  "mic_none",
  "mic_off",
  "minimize",
  "missed_video_call",
  "mms",
  "mobile_friendly",
  "mobile_off",
  "mobile_screen_share",
  "mode_comment",
  "monetization_on",
  "money",
  "money_off",
  "monochrome_photos",
  "mood",
  "mood_bad",
  "more",
  "more_horiz",
  "more_vert",
  "motorcycle",
  "mouse",
  "move_to_inbox",
  "movie",
  "movie_creation",
  "movie_filter",
  "multiline_chart",
  "music_note",
  "music_off",
  "music_video",
  "my_location",
  "nature",
  "nature_people",
  "navigate_before",
  "navigate_next",
  "navigation",
  "near_me",
  "network_cell",
  "network_check",
  "network_locked",
  "network_wifi",
  "new_releases",
  "next_week",
  "nfc",
  "no_encryption",
  "no_meeting_room",
  "no_sim",
  "not_interested",
  "not_listed_location",
  "note",
  "note_add",
  "notes",
  "notification_important",
  "notifications",
  "notifications_active",
  "notifications_none",
  "notifications_off",
  "notifications_paused",
  "offline_bolt",
  "offline_pin",
  "ondemand_video",
  "opacity",
  "open_in_browser",
  "open_in_new",
  "open_with",
  "outlined_flag",
  "pages",
  "pageview",
  "palette",
  "pan_tool",
  "panorama",
  "panorama_fish_eye",
  "panorama_horizontal",
  "panorama_vertical",
  "panorama_wide_angle",
  "party_mode",
  "pause",
  "pause_circle_filled",
  "pause_circle_outline",
  "payment",
  "people",
  "people_outline",
  "perm_camera_mic",
  "perm_contact_calendar",
  "perm_data_setting",
  "perm_device_information",
  "perm_identity",
  "perm_media",
  "perm_phone_msg",
  "perm_scan_wifi",
  "person",
  "person_add",
  "person_add_disabled",
  "personal_video",
  "person_outline",
  "person_pin",
  "person_pin_circle",
  "pets",
  "phone",
  "phone_android",
  "phone_bluetooth_speaker",
  "phone_callback",
  "phone_disabled",
  "phone_enabled",
  "phone_forwarded",
  "phone_in_talk",
  "phone_iphone",
  "phonelink",
  "phonelink_erase",
  "phonelink_lock",
  "phonelink_off",
  "phonelink_ring",
  "phonelink_setup",
  "photo",
  "photo_album",
  "photo_camera",
  "photo_filter",
  "photo_library",
  "photo_size_select_actual",
  "photo_size_select_large",
  "photo_size_select_small",
  "picture_as_pdf",
  "picture_in_picture",
  "picture_in_picture_alt",
  "pie_chart",
  "pie_chart_outlined",
  "pin_drop",
  "place",
  "play_arrow",
  "play_for_work",
  "playlist_add",
  "playlist_add_check",
  "playlist_play",
  "plus_one",
  "poll",
  "polymer",
  "pool",
  "portable_wifi_off",
  "portrait",
  "post_add",
  "power",
  "power_input",
  "power_off",
  "power_settings_new",
  "pregnant_woman",
  "present_to_all",
  "print",
  "print_disabled",
  "priority_high",
  "public",
  "publish",
  "query_builder",
  "question_answer",
  "queue",
  "queue_music",
  "queue_play_next",
  "radio",
  "radio_button_checked",
  "radio_button_unchecked",
  "rate_review",
  "receipt",
  "recent_actors",
  "record_voice_over",
  "redeem",
  "redo",
  "refresh",
  "remove",
  "remove_circle",
  "remove_circle_outline",
  "remove_from_queue",
  "remove_red_eye",
  "remove_shopping_cart",
  "reorder",
  "repeat",
  "repeat_one",
  "replay",
  "replay_10",
  "replay_30",
  "replay_5",
  "reply",
  "reply_all",
  "report",
  "report_off",
  "report_problem",
  "restaurant",
  "restaurant_menu",
  "restore",
  "restore_from_trash",
  "restore_page",
  "ring_volume",
  "room",
  "room_service",
  "rotate_90_degrees_ccw",
  "rotate_left",
  "rotate_right",
  "rounded_corner",
  "router",
  "rowing",
  "rss_feed",
  "rv_hookup",
  "satellite",
  "save",
  "save_alt",
  "scanner",
  "scatter_plot",
  "schedule",
  "school",
  "score",
  "screen_lock_landscape",
  "screen_lock_portrait",
  "screen_lock_rotation",
  "screen_rotation",
  "screen_share",
  "sd_card",
  "sd_storage",
  "search",
  "security",
  "select_all",
  "send",
  "sentiment_dissatisfied",
  "sentiment_neutral",
  "sentiment_satisfied",
  "sentiment_very_dissatisfied",
  "sentiment_very_satisfied",
  "settings",
  "settings_applications",
  "settings_backup_restore",
  "settings_bluetooth",
  "settings_brightness",
  "settings_cell",
  "settings_ethernet",
  "settings_input_antenna",
  "settings_input_component",
  "settings_input_composite",
  "settings_input_hdmi",
  "settings_input_svideo",
  "settings_overscan",
  "settings_phone",
  "settings_power",
  "settings_remote",
  "settings_system_daydream",
  "settings_voice",
  "share",
  "shop",
  "shop_two",
  "shopping_basket",
  "shopping_cart",
  "short_text",
  "show_chart",
  "shuffle",
  "shutter_speed",
  "signal_cellular_0_bar",
  "signal_cellular_4_bar",
  "signal_cellular_alt",
  "signal_cellular_connected_no_internet_4_bar",
  "signal_cellular_no_sim",
  "signal_cellular_null",
  "signal_cellular_off",
  "signal_wifi_0_bar",
  "signal_wifi_4_bar",
  "signal_wifi_4_bar_lock",
  "signal_wifi_off",
  "sim_card",
  "sim_card_alert",
  "single_bed",
  "skip_next",
  "skip_previous",
  "slideshow",
  "slow_motion_video",
  "smartphone",
  "smoke_free",
  "smoking_rooms",
  "sms",
  "sms_failed",
  "snooze",
  "sort",
  "sort_by_alpha",
  "spa",
  "space_bar",
  "speaker",
  "speaker_group",
  "speaker_notes",
  "speaker_notes_off",
  "speaker_phone",
  "speed",
  "spellcheck",
  "sports",
  "sports_baseball",
  "sports_basketball",
  "sports_cricket",
  "sports_esports",
  "sports_football",
  "sports_golf",
  "sports_handball",
  "sports_hockey",
  "sports_kabaddi",
  "sports_mma",
  "sports_motorsports",
  "sports_rugby",
  "sports_soccer",
  "sports_tennis",
  "sports_volleyball",
  "square_foot",
  "star",
  "star_border",
  "star_half",
  "star_outline",
  "stars",
  "stay_current_landscape",
  "stay_current_portrait",
  "stay_primary_landscape",
  "stay_primary_portrait",
  "stop",
  "stop_screen_share",
  "storage",
  "store",
  "store_mall_directory",
  "straighten",
  "streetview",
  "strikethrough_s",
  "style",
  "subdirectory_arrow_left",
  "subdirectory_arrow_right",
  "subject",
  "subscriptions",
  "subtitles",
  "subway",
  "supervised_user_circle",
  "supervisor_account",
  "surround_sound",
  "swap_calls",
  "swap_horiz",
  "swap_horizontal_circle",
  "swap_vert",
  "swap_vertical_circle",
  "switch_camera",
  "switch_video",
  "sync",
  "sync_alt",
  "sync_disabled",
  "sync_problem",
  "system_update",
  "system_update_alt",
  "tab",
  "tab_unselected",
  "table_chart",
  "tablet",
  "tablet_android",
  "tablet_mac",
  "tag_faces",
  "tap_and_play",
  "terrain",
  "text_fields",
  "text_format",
  "text_rotate_up",
  "text_rotate_vertical",
  "text_rotation_angledown",
  "text_rotation_angleup",
  "text_rotation_down",
  "text_rotation_none",
  "textsms",
  "texture",
  "theaters",
  "thumb_down",
  "thumb_down_alt",
  "thumb_up",
  "thumb_up_alt",
  "thumbs_up_down",
  "time_to_leave",
  "timelapse",
  "timeline",
  "timer",
  "timer_10",
  "timer_3",
  "timer_off",
  "title",
  "toc",
  "today",
  "toggle_off",
  "toggle_on",
  "toll",
  "tonality",
  "touch_app",
  "toys",
  "track_changes",
  "traffic",
  "train",
  "tram",
  "transfer_within_a_station",
  "transform",
  "transit_enterexit",
  "translate",
  "trending_down",
  "trending_flat",
  "trending_up",
  "trip_origin",
  "tune",
  "turned_in",
  "turned_in_not",
  "tv",
  "tv_off",
  "unarchive",
  "undo",
  "unfold_less",
  "unfold_more",
  "unsubscribe",
  "update",
  "usb",
  "verified_user",
  "vertical_align_bottom",
  "vertical_align_center",
  "vertical_align_top",
  "vertical_split",
  "vibration",
  "video_call",
  "videocam",
  "videocam_off",
  "videogame_asset",
  "view_agenda",
  "view_array",
  "view_carousel",
  "view_column",
  "view_comfy",
  "view_compact",
  "view_day",
  "view_headline",
  "view_list",
  "view_module",
  "view_quilt",
  "view_stream",
  "view_week",
  "vignette",
  "visibility",
  "visibility_off",
  "voice_chat",
  "voice_over_off",
  "voicemail",
  "volume_down",
  "volume_mute",
  "volume_off",
  "volume_up",
  "vpn_key",
  "vpn_lock",
  "wallpaper",
  "warning",
  "watch",
  "watch_later",
  "waves",
  "wb_auto",
  "wb_cloudy",
  "wb_incandescent",
  "wb_iridescent",
  "wb_sunny",
  "wc",
  "web",
  "web_asset",
  "weekend",
  "whatshot",
  "where_to_vote",
  "widgets",
  "wifi",
  "wifi_lock",
  "wifi_off",
  "wifi_tethering",
  "work",
  "wrap_text",
];

export default iconData;