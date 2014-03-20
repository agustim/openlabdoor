
const St = imports.gi.St;
const Main = imports.ui.main;
const Gio = imports.gi.Gio;

let text, button;


function _openDoor() {

    let url = Gio.file_new_for_uri("http://xxx.xxx.xxx.xxx/xxxx");
    let loaded = false;

    try {
        loaded = url.load_contents(null)[0]
    } catch (e if e instanceof URIError) {
        mess = "Invalid URI:" + url.get_uri();
    }


}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'system-run',
                             icon_type: St.IconType.SYMBOLIC,
                             style_class: 'system-status-icon' });

    button.set_child(icon);
    button.connect('button-press-event', _openDoor);
}

function enable() {
    Main.panel._centerBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._centerBox.remove_child(button);
}
