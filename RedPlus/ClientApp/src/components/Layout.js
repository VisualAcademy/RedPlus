import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <>
                <div>
                    <NavMenu />
                    <Container tag="main">
                        {this.props.children}
                    </Container>
                </div>
                <footer class="border-top footer text-muted text-center">
                    <div class="container">
                    &copy; 2023 - VisualAcademy - <a href="#">Privacy</a>
                    </div>
                </footer>
            </>
        );
    }
}
