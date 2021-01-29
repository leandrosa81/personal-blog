import React from 'react'
//import { Link } from "gatsby"
import Template from "../../components/template"
import example1 from "../../../assets/images/taskbar-monitor-example1.png";
import example2 from "../../../assets/images/taskbar-monitor-example2.png";

const TaskbarMonitor = () => {
    return (

        <Template>
            <div>

                <h1>
                    taskbar-monitor
                </h1>

                <p>A simple resource monitor for windows that resides on your taskbar.</p>

                <img alt="first example" src={example1} />
                <p>It includes quite a few features already:</p>
                <ul>
                    <li>CPU, memory, disk and network graphs;</li>
                    <li>Different views available for each graph (summary, stacked or mirrored);</li>
                    <li>Proper installation tool that automatically registers the deskband at the taskbar.</li>
                </ul>
                <p>Currently it works well with the dark theme and horizontal taskbars, but I am working on it to support a wider taskbar config variety.</p>
                <h2>Download</h2>
                <p>Releases are <a href="https://github.com/leandrosa81/taskbar-monitor/releases" target="_blank" rel="noreferrer">available at Github.</a></p>
                <p>Last version: 0.2.0</p>
                <h2>Install instructions</h2>
                
                <p>To install the taskbar-monitor, you should download the zip file, extract it to a temp location and run the file TaskbarMonitorInstaller.exe.</p>

                <p>It needs administrator rights to run, as it installs on you PROGRAM FILES (x86) folder.
                The reason for this, is that this tool registers itself for all users, so the dll files should be accessible for
                    all users on the computer.</p>

                <h4>Manual install</h4>

                <p>You can also manually install this tool, by putting the TaskbarMonitor.dll on any public location (eg. C:\taskbar-monitor) and
                running the following cmd (with admin privileges):
                        </p>
                <pre>%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\regasm.exe /nologo /codebase "TaskbarMonitor.dll"</pre>
                <h4>Uninstall</h4>
                <p>To uninstall it, run the installer with "/uninstall" parameter</p>
                <pre>TaskbarMonitorInstaller.exe /uninstall</pre>
                <h4>Manual uninstall</h4>
                <p>Run the following cmd:</p>
                <pre>%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\regasm.exe /unregister "TaskbarMonitor.dll"</pre>
                <p>Then, after a reboot, delete the folder "TaskbarMonitor" on your PROGRAM FILES (x86) folder.</p>


                <h2>Usage</h2>
                <p>To activate it, you must select it on the taskbar context menu.</p>
                <p>If you click with the right mouse button, a context menu will display several options:</p>
                <img alt="second example" src={example2} />
                <p>In the future it will be replaced with a proper "Settings" dialog window.</p>

                <h2>Roadmap</h2>
                <p>In the future, I plan to add some interesting features to this tool:</p>
                <ul>
                    <li>Settings dialog window.</li>
                    <li>Save config on disk (per user, on appdata\programs folder)</li>
                    <li>theme selection</li>
                    <li>full graph customization (size, labels, etc.)</li>
                    <li>allow adding new graphs (plugins, eg. GPU, stock quotes)</li>
                </ul>

                <h2>Troubleshooting</h2>
                <p>If you have any problems with this tool, feel free to report it using github tools.</p>
            </div>

        </Template>
    )
}

export default TaskbarMonitor
