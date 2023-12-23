
package com.rntextview;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * TextViewPackage support new/old arch
 */
public class TextViewPackage implements ReactPackage {
  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext context) {
    List<ViewManager> viewManagers = new ArrayList<>();
    viewManagers.add(new TextViewManager(context));
    return viewManagers;
  }

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext context) {
    return Collections.emptyList();
  }
}
