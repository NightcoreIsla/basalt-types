import { Basalt } from "./basalt-lib";
import { BaseFrame } from "./lib/BaseFrame";
import { Button } from "./lib/Button";
import { ChangeableObject } from "./lib/ChangeableObject";
import { Checkbox } from "./lib/Checkbox";
import { Container } from "./lib/Container";
import { Dropdown } from "./lib/Dropdown";
import { Flexbox } from "./lib/Flexbox";
import { Frame } from "./lib/Frame";
import { Graph } from "./lib/Graph";
import { Image } from "./lib/Image";
import { Input } from "./lib/Input";
import { Label } from "./lib/Label";
import { List } from "./lib/List";
import { Menubar } from "./lib/Menubar";
import { MonitorFrame } from "./lib/MonitorFrame";
import { MovableFrame } from "./lib/MovableFrame";
import { BasaltObject } from "./lib/Object";
import { Pane } from "./lib/Pane";
import { Program } from "./lib/Program";
import { Progressbar } from "./lib/Progressbar";
import { Radio } from "./lib/Radio";
import { ScrollableFrame } from "./lib/ScrollableFrame";
import { Scrollbar } from "./lib/Scrollbar";
import { Slider } from "./lib/Slider";
import { Textfield } from "./lib/Textfield";
import { Thread } from "./lib/Thread";
import { Timer } from "./lib/Timer";
import { Treeview } from "./lib/Treeview";
import { VisualObject } from "./lib/VisualObject";

/**
 * @noResolution
 * */
declare module "basalt"
{

    //write on basalt docs: https://basalt.madefor.cc/#/objects/Basalt at 2023.11.06
    /**
     * This starts the event and draw handler for you. The listeners will run until you stop them.
     * @param eventAndListeners optional - if you use false as the first parameter it would stop the listeners. Using false is a synonym for basalt.stopUpdate().
     */
    function autoUpdate(eventAndListeners: boolean?) : void;
    /**
     * Creates a new base frame, which is essentially a frame without a parent. You can have as many base frames as you want, but only one can be active (visible) at a time. You can always switch between your base frames.
        Only the currently active base frame listens to incoming events (except for some events like time-events and peripheral-events).
     * @param id optional (if you don’t set an ID, it will automatically create a UUID for you)
     */
    function createFrame(id: string?) : Frame;
    /**
     * Creates a label with some information on the main frame in the bottom left corner. When you click on that label, it will open a log view for you. Think of it as the new print for debugging.
        You can also edit the default debug label (change position, change color, or whatever you want) by accessing the variable basalt.debugLabel, which returns the debug label.
        basalt.debugFrame and basalt.debugList are also available.
     * @param args (multiple parameters are possible, like print does)
     */
    function debug(...args: string) : void;
    /**
     * Returns a base frame by the given id.
     * @param id The id of used to create the frame.
     * @returns The frame with the supplied id.
     */
    function getFrame(id: string) : Frame | null;
    /**
     * Returns the currently active/visible base frame.
     * @returns The current frame.
     */
    function getActiveFrame() : Frame | null;
    /**
     * not clearly defined in docs
     * Returns the current base-theme. This base-theme can be set using setTheme.lua.
     * @param id not clearly defined in docs
     * @returns The color of the requested base-theme key.
     */
    function getTheme(id: string) : number
    /**
     * Returns a variable defined with setVariable
     * @param variableName save key
     */
    function getVariable(variableName : string) : any;
    /**
     * Returns a variable defined with setVariable
     * @param variableName save key
     * @param value any value, able to return function
     */
    function setVariable(variableName : string, value: any) : void;
    /**
     * Returns the currently active/visible base frame.
     * @returns The current version of Basalt.
     */
    function getVersion() : string;
    /**
     * Checks if the user is currently holding a key
     * @param key key code (use the keys table for that)
     * @returns true or false
     */
    function isKeyDown(key: Key) : boolean;
    /**
     * Writes a message to the log file. This can be useful for debugging errors or keeping a record of events in your application. Log files are automatically removed when you start your program again.
     * @param text The text to write into the log file
     * @param type The type or category of the log message
     */
    function log(text: string, type: logType) : void;
    /**
     * not clearly defined in docs
     * Returns the current memory usage of Basalt
     */
    function memory() : string
    /**
     * This is the top-level method to intercept an event before sending it to the object event handlers. If you use return false, the event is not passed to the event handlers.
     * @param fn The function which should be called
     * @param event not clearly defined in docs
     */
    function onEvent(fn: (event: string) => EventCallbackReturnType) : void;
    /**
     * Removes the base frame by it’s id. This only works for base-frames.
     * @param id ID of the base-frame.
     */
    function removeFrame(id: string) : void;
    /**
     * Schedules a function which gets called in a coroutine. After the coroutine is finished it will get destroyed immediatly. It’s something like threads, but with some limits. A guide can be found here.
     * https://basalt.madefor.cc/#/tips/logic
     * @param fn a function which should get executed
     * @function it returns the function which you have to execute in order to start the coroutine
     */
    function schedule(fn: (self: Basalt) => void) : () => void;
    /**
     * Sets the active base frame.
     * @param frame The frame that should be the active base-frame.
     */
    function setActiveFrame(frame: Frame) : void
    /**
     * Sets the base theme of the project! Make sure to cover all existing objects, otherwise it will result in errors. A good example is theme. The theme can also be retrieved with basalt.getTheme()
     * @param ThemeTable A table containing the theme layout. Look into theme for an example
     */
    function setTheme(ThemeTable) : void;
    /**
     * Changes the drag throttle of all drag events. Default value is 50ms - which is 0.05s. Instead of sending all mouse_drag events to the :onDrag handlers basalt sends every 0.05s (while dragging) the most recent drag event to all drag handlers. If you need all drag events - just change the value to 0.
     * @param throttle default at 50 - A number in milliseconds representing the drag throttle.
     */
    function setMouseDragThrottle(throttle : number) : void;
    /**
     * This feature is only available for CraftOS-PC.
        CraftOS-PC has a built-in mouse_move event, which is disabled by default. By using this method, it will also enable the event for you. Remember, Basalt does not disable the event after closing the program, which means the event stays active. If you want to disable the event, please use config.set("mouse_move_throttle", -1) in your Lua prompt or your program.
        Sidenote: A very low amount can make the program laggy because it literally spams the mouse_move event. So, use it carefully.
        @param throttle default at 50 - A number in milliseconds representing the mouse move throttle.
     */
    function setMouseMoveThrottle(throttle : number) : void;
    /**
     * not clearly defined in docs
     * @param throttle default at 50 - A number in milliseconds representing
     */
    function setRenderingThrottle(throttle : number) : void;
    /**
     * This method stops the automatic draw and event handler that was started by basalt.autoUpdate(). basalt.autoUpdate(false) achieves the same result.
     */
    function stopUpdate() : void;
    /**
     * not clearly defined in docs
     * Calls the draw and event handler once - this gives more flexibility about which events basalt should process. For example you could filter the terminate event. Which means you have to pass the events into basalt.update.
     * @param args 
     */
    function update(...args : string) : void;
    /**
     * The basalt.addObject method allows you to add new custom objects (elements) to the Basalt framework. This enables extending the framework with additional functionality tailored to specific needs. It’s important to note that this method must be called before basalt.autoUpdate and can only be used during the initialization phase, not during runtime.
     * @param path The path to the Lua file or folder containing the custom object(s).
     */
    function addObject(path: string) : void;
    /**
     * The basalt.addPlugin method allows you to add new custom plugins to the Basalt framework. This enables extending the framework with additional functionality tailored to specific needs. It’s important to note that this method must be called before basalt.autoUpdate and can only be used during the initialization phase, not during runtime.
     * @param path The path to the Lua file or folder containing the plugin(s).
     */
    function addPlugin(path : string) : void;
}
/**
 * For Basalt.Log Show at Log Summary
 * Actually can use string, but I want to make it more clear
 */
export declare enum logType {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}
/**
 * ReWrite From https://github.com/Pyroxenium/Basalt/blob/master/Basalt/plugins/themes.lua
 */
export declare class ThemeTable {
    BaseFrameBG: Colour = colors.lightGray;
    BaseFrameText: Colour = colors.black;
    FrameBG: Colour = colors.gray;
    FrameText: Colour = colors.black;
    ButtonBG: Colour = colors.gray;
    ButtonText: Colour = colors.black;
    CheckboxBG: Colour = colors.lightGray;
    CheckboxText: Colour = colors.black;
    InputBG: Colour = colors.black;
    InputText: Colour = colors.lightGray;
    TextfieldBG: Colour = colors.black;
    TextfieldText: Colour = colors.white;
    ListBG: Colour = colors.gray;
    ListText: Colour = colors.black;
    MenubarBG: Colour = colors.gray;
    MenubarText: Colour = colors.black;
    DropdownBG: Colour = colors.gray;
    DropdownText: Colour = colors.black;
    RadioBG: Colour = colors.gray;
    RadioText: Colour = colors.black;
    SelectionBG: Colour = colors.black;
    SelectionText: Colour = colors.lightGray;
    GraphicBG: Colour = colors.black;
    ImageBG: Colour = colors.black;
    PaneBG: Colour = colors.black;
    ProgramBG: Colour = colors.black;
    ProgressbarBG: Colour = colors.gray;
    ProgressbarText: Colour = colors.black;
    ProgressbarActiveBG: Colour = colors.black;
    ScrollbarBG: Colour = colors.lightGray;
    ScrollbarText: Colour = colors.gray;
    ScrollbarSymbolColor: Colour = colors.black;
    SliderBG: Colour = false;
    SliderText: Colour = colors.gray;
    SliderSymbolColor: Colour = colors.black;
    SwitchBG: Colour = colors.lightGray;
    SwitchText: Colour = colors.gray;
    LabelBG: Colour = false;
    LabelText: Colour = colors.black;
    GraphBG: Colour = colors.gray;
    GraphText: Colour = colors.black;   
}
