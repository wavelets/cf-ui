const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Button = require('../src/Button');

describe('Button', function() {
  it('should render with type', function() {
    assertEqualJSX(
      <Button type="primary" onClick={() => {}}>Button</Button>,
      // should equal
      <button type="button" className="cf-btn cf-btn--primary">Button</button>
    );
  });

  it('should render with type/disabled', function() {
    assertEqualJSX(
      <Button type="primary" disabled onClick={() => {}}>Button</Button>,
      // should equal
      <button type="button" className="cf-btn cf-btn--primary" disabled>Button</button>
    );
  });

  it('should render as submit', function() {
    assertEqualJSX(
      <Button type="primary" submit onClick={() => {}}>Button</Button>,
      // should equal
      <button type="submit" className="cf-btn cf-btn--primary">Button</button>
    );
  });

  it('should render with loading', function() {
    assertEqualJSX(
      <Button type="primary" loading onClick={() => {}}>Button</Button>,
      // should equal
      <button type="button" className="cf-btn cf-btn--primary cf-btn--loading" disabled>Button</button>
    );
  });

  it('should render with loading and disabled overridden', function() {
    assertEqualJSX(
      <Button type="primary" loading disabled={false} onClick={() => {}}>Button</Button>,
      // should equal
      <button type="button" className="cf-btn cf-btn--primary cf-btn--loading">Button</button>
    );
  });

});
