import React, { ReactNode } from 'react';
import './Layout.css'; // 假设你有一个自定义的样式文件  

// 自定义的 Header 组件  
const Header = (props) => {
  const { children, height = 50 } = props;
  return (
    <header className="custom-header" style={{ height: `${height}px` }}>
      {children}
    </header>
  )
};

// 自定义的 Footer 组件  
const Footer = (props) => {
  const { children, height = 50 } = props;
  return (
    <footer className="custom-footer" style={{ height: `${height}px` }}>
      {children}
    </footer>
  )
};

// 自定义的 Sider 组件（侧边栏）  
const Sider = () => {
  const { children, width = 100 } = props;
  return (
    <aside className="custom-sider" style={{ width: `${width}px` }}>
      <div className="sider-content">{children}</div>
    </aside>
  );
};

// 自定义的 Content 组件  
const Content = (props) => {
  const { children } = props;
  return (
    <main className="custom-content">
      <div className="content-wrapper">{children}</div>
    </main>
  );
};

// 自定义的 Layout 组件  
const Layout = (props) => {
  const { children } = props;
  const hasHeader = React.Children.toArray(children).some((child) => child.type === Header);
  const hasSider = React.Children.toArray(children).some((child) => child.type === Sider);
  const hasFooter = React.Children.toArray(children).some((child) => child.type === Footer);

  return (
    <div className="custom-layout">
      {hasHeader && React.Children.toArray(children).find((child) => { return child.type === Header })}

      <div className="custom-layout-body">
        <div className={`custom-layout-content ${hasSider ? 'has-sider' : ''}`}>

          {hasSider && React.Children.toArray(children).find((child) => { return child.type === Sider })}


          {React.Children.toArray(children).find((child) => { return child.type === Content })}

        </div>
      </div>
      {hasFooter && React.Children.toArray(children).find((child) => { return child.type === Footer })}
    </div>
  );
};

Layout.Header = Header
Layout.Sider = Sider
Layout.Content = Content
Layout.Footer = Footer


export default Layout;