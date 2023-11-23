import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Gesture Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Container(
          padding: EdgeInsets.all(16.0),
          color: Colors.blue,
          child: Text('Tap Me', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

class TapPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tap Gesture Page'),
      ),
      body: Center(
        child: Container(
          padding: EdgeInsets.all(16.0),
          color: Colors.green,
          child: Text('Double Tap Me', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

class DoubleTapPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Double Tap Gesture Page'),
      ),
      body: Center(
        child: Container(
          padding: EdgeInsets.all(16.0),
          color: Colors.orange,
          child: Text('Long Press Me', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

class LongPressPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Long Press Gesture Page'),
      ),
      body: Center(
        child: Container(
          padding: EdgeInsets.all(16.0),
          color: Colors.red,
          child: Text('Vertical Drag Me', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

class VerticalDragPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Vertical Drag Gesture Page'),
      ),
      body: Center(
        child: Container(
          padding: EdgeInsets.all(16.0),
          color: Colors.purple,
          child: Text('Horizontal Drag Me to Go Back', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

class GestureTabs extends StatefulWidget {
  @override
  _GestureTabsState createState() => _GestureTabsState();
}

class _GestureTabsState extends State<GestureTabs> {
  int _selectedIndex = 0;
  List<Widget> _pages = [
    HomePage(),
    TapPage(),
    DoubleTapPage(),
    LongPressPage(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.touch_app),
            label: 'Tap',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.double_arrow),
            label: 'Double Tap',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.touch_app),
            label: 'Long Press',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.drag_handle),
            label: 'Vertical Drag',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }
}

class GestureApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Gesture Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: GestureTabs(),
    );
  }
}

void main() {
  runApp(GestureApp());
}
