var allDesktops = desktops();
    print (allDesktops);
    for (i=0;i<allDesktops.length;i++) {{
        d = allDesktops[i];
        d.wallpaperPlugin = "org.kde.image";
        d.currentConfigGroup = Array("Wallpaper",
                                     "org.kde.image",
                                     "General");
        d.writeConfig("Image", ".local/share/wallpapers/Deepin-kyaw-tun/contents/images/3840x2400.jpg")
    }}
var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "10"
                },
                "/General": {
                    "ToolBoxButtonState": "bottom",
                    "ToolBoxButtonX": "739",
                    "ToolBoxButtonY": "983",
                    "sortMode": "-1"
                },

            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "0",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                            "/General": {
                                "icon": "launcher"
                                }
                    },
                    "plugin": "AvalonMenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/General": {
                                "icon": "deepin-show-desktop"
                                }
                        },
                        "plugin": "org.kde.plasma.showdesktop"
                },
                 {
                     "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.latte.separator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/General": {
                            "indicateAudioStreams": "false",
                            "launchers": "applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:org.kde.discover.desktop,applications:org.kde.gwenview.desktop,applications:org.kde.konsole.desktop,applications:systemsettings.desktop",
                            "maxStripes": 1
                                }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                 {
                     "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.latte.separator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.bluetooth"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.volume"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Appearance": {
                            "useUserLayout": "true"
                        },
                        "/Configuration/Appearance": {
                            "layout": '<html><body><center><span style="font-size: 20px;">{h}:{ii}</span></center><center>{dd}/{mm}/{yyyy}</center></body></html>'
                        }

                    },
                    "plugin": "com.marcinorlowski.htmlclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                 "plugin": "org.kde.plasma.trash"
                    }

            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                }
            },
            "height": 3,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 100,
            "minimumLength": 100,
            "offset": 0,
            "alignment":"center"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
