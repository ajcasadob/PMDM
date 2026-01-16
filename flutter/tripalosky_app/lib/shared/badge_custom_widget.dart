import 'package:flutter/material.dart';

class BadgeCustomWidget extends StatelessWidget {

  final double width;
  final String label;
  final IconData icon;
  final Color color;

  const BadgeCustomWidget({

    super.key,
    required this.width,
    required this.label,
    required this.icon,
    required this.color
    
    });

  @override
  Widget build(BuildContext context) {
    return Container(
      width:width,
      decoration: BoxDecoration(
        color:Colors.grey[200]?.withValues(alpha:0.4),
        borderRadius: BorderRadius.circular(12)
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: color,),
          const SizedBox(width: 8,),
          Text(label, style: TextStyle(
            color: color,
            fontWeight: FontWeight.bold
          ),)
        ],
      ),
    );
  }
}