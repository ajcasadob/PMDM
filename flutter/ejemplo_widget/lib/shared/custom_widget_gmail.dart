import 'package:flutter/material.dart';

class GmailHeaderWidget extends StatelessWidget {
  // SOLO 3 VARIABLES (sin avatarUrl)
  final String searchText;
  final VoidCallback onMenuTap;
  final VoidCallback onAvatarTap;

  const GmailHeaderWidget({
    super.key,
    required this.searchText,
    required this.onMenuTap,
    required this.onAvatarTap,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      color: Colors.white,
      child: Row(
        children: [
          // COMPONENTE 1: Menú hamburguesa
          _buildMenuButton(),
          
          const SizedBox(width: 12),
          
          // COMPONENTE 2: Barra de búsqueda
          Expanded(
            child: _buildSearchBar(),
          ),
          
          const SizedBox(width: 12),
          
          // COMPONENTE 3: Avatar circular
          _buildAvatar(),
        ],
      ),
    );
  }

  // COMPONENTE 1: Botón de menú hamburguesa
  Widget _buildMenuButton() {
    return IconButton(
      icon: const Icon(Icons.menu),
      onPressed: onMenuTap,
      color: Colors.grey.shade700,
    );
  }

  // COMPONENTE 2: Barra de búsqueda
  Widget _buildSearchBar() {
    return Container(
      height: 48,
      decoration: BoxDecoration(
        color: Colors.grey.shade200,
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        children: [
          const SizedBox(width: 16),
          Icon(Icons.search, color: Colors.grey.shade600),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              searchText,
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey.shade700,
              ),
            ),
          ),
        ],
      ),
    );
  }

  // COMPONENTE 3: Avatar circular de color
  Widget _buildAvatar() {
    return GestureDetector(
      onTap: onAvatarTap,
      child: CircleAvatar(
        radius: 20,
        backgroundColor: Colors.blue.shade700,
        child: const Icon(
          Icons.person,
          color: Colors.white,
          size: 24,
        ),
      ),
    );
  }
}