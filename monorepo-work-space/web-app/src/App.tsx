import React, { useState } from "react";
import { Button } from "ui-components";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Monorepo 示例应用</h1>

      <div style={{ marginBottom: "30px" }}>
        <p>
          这是一个使用monorepo管理的Web应用，它使用了共享UI组件库中的按钮组件。
        </p>
        <p>
          你可以看到，我们可以直接导入和使用<code>ui-components</code>
          包中的组件，就像使用外部NPM包一样方便！
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>计数器示例</h2>
        <p>
          当前计数: <strong>{count}</strong>
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            text="增加"
            type="primary"
            onClick={() => setCount(count + 1)}
          />

          <Button
            text="减少"
            type="default"
            onClick={() => setCount(count - 1)}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <h3>Monorepo优势</h3>
        <ul>
          <li>代码共享更简单 - 如本例中的UI组件库</li>
          <li>统一的依赖管理 - 避免版本冲突</li>
          <li>原子提交 - 跨多个项目的更改可以在一次提交中完成</li>
          <li>简化的CI/CD - 更容易设置和维护持续集成流程</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
