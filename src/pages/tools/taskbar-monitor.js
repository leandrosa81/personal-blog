import React from 'react'
//import { Link } from "gatsby"
import Template from "../../components/template"
import example1 from "../../../assets/images/taskbar-monitor-example1.png";
import example1a from "../../../assets/images/taskbar-monitor-example1a.png";
import example2 from "../../../assets/images/taskbar-monitor-example2.png";
import example3 from "../../../assets/images/taskbar-monitor-example3.png";
import example4 from "../../../assets/images/taskbar-monitor-example4.png";
import example5 from "../../../assets/images/taskbar-monitor-animation01.gif";

const TaskbarMonitor = () => {
    return (

        <Template>
            <div>

                <h1>
                    taskbar-monitor
                </h1>

                <p>A simple resource monitor for windows that resides on your taskbar.</p>

                <img alt="first example (dark theme)" src={example1} /><br/>
                <img alt="second example (light theme)" src={example1a} />
                <p>Animated example:</p>
                <img alt="animation example" src={example5} />
                
                <p>It includes quite a few features already:</p>
                <ul>
                    <li>CPU, memory, disk and network graphs;</li>
                    <li>Different views available for each graph (summary, stacked or mirrored);</li>
                    <li>Proper installation tool that automatically registers the deskband at the taskbar.</li>
                </ul>
                <p>Currently it works well with the dark theme and horizontal taskbars, but I am working on it to support a wider taskbar config variety.</p>
                <h2>Download</h2>
                <p>Releases are <a href="https://github.com/leandrosa81/taskbar-monitor/releases/latest" target="_blank" rel="noreferrer">available at Github.</a></p>
                
                <h2>Install instructions</h2>
                
                <p>To install the taskbar-monitor, first make sure you have <a href="https://dotnet.microsoft.com/download/dotnet-framework/net472" target="_blank" rel="noreferrer">.NET Framework 4.7.2 runtime</a> installed on your computer. If you use Windows 10 1803 April 2018 or later, it is already installed on your computer. Then, download the TaskbarMonitorInstaller.exe installer and run it.</p>

                <p>It needs administrator rights to run, as it installs on your PROGRAM FILES (x86) folder.
                The reason for this is that this tool registers itself for all users, so the dll files should be accessible for
                    all users on the computer.</p>

                <h4>Manual install</h4>

                <p>If you compile it from the source, you can also manually install this tool by putting the TaskbarMonitor.dll on any public location (eg. C:\taskbar-monitor) and
                running the following cmd (with admin privileges):
                        </p>
                <pre>%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\regasm.exe /nologo /codebase "TaskbarMonitor.dll"</pre>
                <h2>Uninstall</h2>
                <p>To uninstall it, run the installer with "/uninstall" parameter</p>
                <pre>TaskbarMonitorInstaller.exe /uninstall</pre>
                <p>This will unregister the DLL and delete the files and folder on your PROGRAM FILES (x86) folder.</p>
                <h4>Manual uninstall</h4>
                <p>Run the following cmd:</p>
                <pre>%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\regasm.exe /unregister "TaskbarMonitor.dll"</pre>
                <p>Then, after a reboot, delete the files.</p>


                <h2>Usage</h2>
                <p>To activate it, you must select it on the taskbar context menu. Right click on your taskbak, go to "Taskbar", then select "Taskbar Monitor".</p>
                <p>If you click with the right mouse button, a context menu will display several options:</p>
                <img alt="second example" src={example2} />
                <p><strong>General</strong> tab:</p>                
                <img alt="third example" src={example3} />
                <p>Here you can change:</p>
                <ul>
                    <li>History size: amount of historical data to display. This will impact directly in the deskband size. If you change this, make sure to unlock and unlock the taskbar again to display the monitor correctly.</li>
                    <li>Poll time: number of seconds between each update.</li>
                    <li>Visual group: here you can change font family, size and colors used on the graphs.</li>
                </ul>
                <p><strong>Graphs</strong> tab:</p>
                <img alt="fourth example" src={example4} />

                <h2>Roadmap</h2>
                <p>In the future, I plan to add some interesting features to this tool:</p>
                <ul>                    
                    <li>theme selection</li>
                    <li>support for light theme</li>                    
                    <li>allow adding new graphs (plugins, eg. GPU, stock quotes)</li>
                    <li style={{textDecoration: "line-through"}}>Settings dialog window.</li>
                    <li style={{textDecoration: "line-through"}}>Save config on disk (per user, on appdata\programs folder)</li>
                    <li style={{textDecoration: "line-through"}}>full graph customization (size, labels, etc.)</li>
                </ul>

                <h2>Troubleshooting</h2>
                <p>If you have any problems with this tool, feel free to report it using github tools.</p>
            </div>

        </Template>
    )
}

export default TaskbarMonitor
